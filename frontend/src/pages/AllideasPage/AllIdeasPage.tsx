import { trpc } from '../../lib/trpc'

const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()

  if (isLoading || isFetching) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>All Ideas</h1>
      {data.ideas.map((idea) => (
        <div key={idea.id}>
          <p>{idea.title}</p>
        </div>
      ))}
    </div>
  )
}

export default AllIdeasPage
