import { UserContextProvider } from './context/users.context'
import { Home } from './pages/Home'

function App() {
  return (
    <UserContextProvider>
      <Home />
    </UserContextProvider>
  )
}

export default App
