function App() {
  const ideas = [
    { nick: 'cool-idea-1', id: 1, title: 'Learn TypeScript' },
    { nick: 'cool-idea-2', id: 2, title: 'Build a full-stack app' },
    { nick: 'cool-idea-3', id: 3, title: 'Learn GraphQL' },
  ]
  return (
    <>
      <h1>Ideas</h1>
      <ul>
        {ideas.map((idea) => (
          <li key={idea.id}>{idea.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
