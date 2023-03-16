import { config } from '../config'
import { formatPromptExercise } from '../utilities/formatPromptExercise'
const OPENAI_API_KEY = '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'
export const resolveExercise = async ({ prompt, language }) => {
  const promptFormatted = formatPromptExercise({ language, prompt })
  const response = await fetch(config.CHATGPT_API_COMPLETIONS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        ...config.MESSAGES_INIT,
        { role: 'user', content: promptFormatted }
      ],
      temperature: 0.0
    })
  })
  const json = await response.json()
  if (!response.ok) {
    return {
      error: json.error
    }
  }

  return {
    response: json.choices[0].message.content
  }
}
