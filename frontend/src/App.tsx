import { TrpcProvider } from './lib/trpc'
import AllIdeasPage from './pages/AllideasPage/AllIdeasPage'

const App = () => {
  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  )
}

export default App
