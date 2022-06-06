export interface User {
  id: number
  name: string
  job: string
  favoriteColor: string
}

enum ActionType {
  'CREATE' = 'CREATE',
  'UPDATE' = 'UPDATE',
  'DELETE' = 'DELETE',
  'LOAD_USERS' = 'LOAD_USERS'
}

export type ActionTypes = keyof typeof ActionType

export interface UsersState<T> {
  data: User[]
}

export interface UsersAction<T> {
  type: ActionTypes
  payload: any
}

export type UsersReducerType<T> = React.Reducer<UsersState<T>, UsersAction<T>>

function UsersReducer<T>(
  state: UsersState<T>,
  action: UsersAction<T>
): UsersState<T> {
  switch (action.type) {
    case ActionType.CREATE:
      return {
        ...state,
        data: [{ ...action.payload }, ...state.data]
      }

    case ActionType.DELETE:
      return {
        ...state,
        data: state.data.filter(({ id }: User) => id !== action.payload.id)
      }

    case ActionType.UPDATE:
      return {
        ...state,
        data: state.data.map((user: User) => {
          if (user.id === action.payload.id) {
            return action.payload
          }

          return user
        })
      }

    case ActionType.LOAD_USERS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export { UsersReducer }
