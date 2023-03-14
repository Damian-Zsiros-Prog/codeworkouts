import { config } from '../config'

export const resolveExercise = async ({ prompt, language }) => {
  const promptFormatted = `Dame la solucion del siguiente ejercicio de programacion en el lenguaje ${language} en base al siguiente texto:
   ${prompt}`
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
