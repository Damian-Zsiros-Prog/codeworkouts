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
  ],
  languages: [
    {
      slug: 'javascript',
      name: 'Javascript'
    },
    {
      slug: 'typescript',
      name: 'Typescript'
    },
    {
      slug: 'java',
      name: 'Java'
    },
    {
      slug: 'cpp',
      name: 'C++'
    },
    {
      slug: 'csharp',
      name: 'C#'
    },
    {
      slug: 'python',
      name: 'Python'
    },
    {
      slug: 'c',
      name: 'C'
    },
    {
      slug: 'go',
      name: 'Go'
    },
    {
      slug: 'dart',
      name: 'Dart'
    },
    {
      slug: 'kotlin',
      name: 'Kotlin'
    },
    {
      slug: 'lua',
      name: 'Lua'
    },
    {
      slug: 'php',
      name: 'PHP'
    },
    {
      slug: 'r',
      name: 'R'
    },
    {
      slug: 'vb',
      name: 'Visual Basic'
    },
    {
      slug: 'sql',
      name: 'SQL'
    },
    {
      slug: 'pascal',
      name: 'Pascal'
    },
    {
      slug: 'scala',
      name: 'Scala'
    },
    {
      slug: 'html',
      name: 'HTML'
    },
    {
      slug: 'swift',
      name: 'Swift'
    },
    {
      slug: 'scss',
      name: 'SCSS'
    },
    {
      slug: 'rust',
      name: 'Rust'
    },
    {
      slug: 'xml',
      name: 'XML'
    },
    {
      slug: 'shell',
      name: 'Shell'
    }
  ]
}
