enum ModalContent {
  'INITIAL' = 'INITIAL',
  'USER_DETAILS' = 'USER_DETAILS',
  'DELETE_USER' = 'DELETE_USER',
  'UPDATE_USER' = 'UPDATE_USER'
}

export type TypeModal = keyof typeof ModalContent

type Payload<T> = {
  data: T
  modalType: TypeModal
}

export interface State<T> {
  data: T
  modalType: TypeModal
}

export interface Action<T> {
  payload: Payload<T>
}

export type ModalTransportReducerType<T> = React.Reducer<State<T>, Action<T>>

function ModalTransportReducer<T>(
  state: State<T>,
  action: Action<T>
): State<T> {
  const { payload } = action

  return {
    ...state,
    data: payload.data,
    modalType: payload.modalType
  }
}

export { ModalTransportReducer }
