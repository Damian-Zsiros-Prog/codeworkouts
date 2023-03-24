import { config } from '../config'
import { Configuration, OpenAIApi } from "openai";
import { formatPromptExercise } from '../utilities/formatPromptExercise'
export const resolveExercise = async ({ prompt, language }) => {
  const promptFormatted = formatPromptExercise({ language, prompt })
  const configuration = new Configuration({
    apiKey: config.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  let error = null
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.0,
    messages: [
      ...config.MESSAGES_INIT,
      {role:'user',content:promptFormatted}
    ]
  }).catch(err => {
    error = err
  });
  if(error){
    return{
      error
    }
  }
  return {
    response: response.data.choices[0].message.content
  }
}
