import { config } from '../config'
import { formatPromptExercise } from '../utilities/formatPromptExercise'
export const resolveExercise = async ({ prompt, language }) => {
  const promptFormatted = formatPromptExercise({ language, prompt })
  const response = await fetch(config.CHATGPT_API_COMPLETIONS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.OPENAI_API_KEY}`,
      'Access-Control-Allow-Origin': '*',
      Connection: 'keep-alive',
      'Cache-Control': 'no-cache, no-transform',
      'Content-Encoding': 'none'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: promptFormatted }
      ],
      temperature: 0.2
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
