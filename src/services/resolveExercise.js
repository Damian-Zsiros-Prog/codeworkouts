import { config } from '../config'
import { formatPromptExercise } from '../utilities/formatPromptExercise'

export const resolveExercise = async ({ prompt, language }) => {
  const promptFormatted = formatPromptExercise({ language, prompt })
  const response = await fetch(config.CHATGPT_API_COMPLETIONS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.OPEN_API_KEY}`
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
  return {
    response: json.choices[0].message.content
  }
}
