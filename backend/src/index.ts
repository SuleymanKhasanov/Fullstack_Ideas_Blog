import express from 'express'

const expressApp = express()

const ideas = [
  { nick: 'cool-idea-1', id: 1, title: 'Learn TypeScript' },
  { nick: 'cool-idea-2', id: 2, title: 'Build a full-stack app' },
  { nick: 'cool-idea-3', id: 3, title: 'Learn GraphQL' },
]

expressApp.get('/ping', (req, res) => {
  res.send('pong')
})

expressApp.get('/ideas', (req, res) => {
  res.send(ideas)
})

expressApp.listen(3000, () => {
  console.info('Server is running on http://localhost:3000')
})
