import { UserDetails, UpdateUser } from '../../components'

import { TypeModal, User } from '../../reducers'

interface TableModalProps {
  type: TypeModal
  data: User
}

type Modals = { [k in TypeModal]: React.ReactNode }

function TableModal({ type, data }: TableModalProps) {
  switch (type) {
    case 'USER_DETAILS':
      return <UserDetails data={data} />

    case 'UPDATE_USER':
      return <UpdateUser data={data} />

    case 'INITIAL':
      return null

    default:
      return null
  }
}

export { TableModal }
