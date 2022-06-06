import { createContext, useContext, useEffect, useReducer } from 'react'
import {
  User,
  UsersAction,
  UsersReducer,
  UsersReducerType,
  UsersState
} from '../reducers'
import { instance } from '../services'

interface UsersContextType {
  users: UsersState<User[]>
  setUsers: React.Dispatch<UsersAction<User[]>>
}

const UsersContext = createContext({} as UsersContextType)

interface UserContextProviderType {
  children: React.ReactNode
}

function UserContextProvider({ children }: UserContextProviderType) {
  const [users, setUsers] = useReducer<UsersReducerType<User[]>>(UsersReducer, {
    data: []
  })

  async function getUsers() {
    const response = await instance.get<Users[]>('users')

    const { data } = response

    setUsers({ type: 'LOAD_USERS', payload: { data } })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  )
}

const useUsers = () => useContext(UsersContext)

export { UserContextProvider, useUsers }
