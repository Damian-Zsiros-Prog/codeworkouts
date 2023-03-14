export const config = {
  OPEN_API_KEY: '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',
  CHATGPT_API_COMPLETIONS_URL: 'https://api.openai.com/v1/chat/completions',
  MESSAGES_INIT: [
    {
      role: 'user',
      content:
        'Dame el codigo de la solucion en el lenguaje javascript del siguiente enunciado: la suma de dos numeros enteros'
    },
    {
      role: 'assistant',
      content:
        "let num1 = Number(prompt('Dame un numero'))\nlet num2 = Number(prompt('Dame un numero'))\n console.log(num1+num2)"
    }
  ]
}
