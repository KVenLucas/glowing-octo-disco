import { UserCirclePlus } from 'phosphor-react'
import { Fragment, useId, useReducer } from 'react'
import { Modal, Table, TableHeader, TableModal, TableRow } from '../common'
import { useUsers } from '../context/users.context'

import { ModalTransportReducer, ModalTransportReducerType } from '../reducers'

export interface User {
  id: number
  name: string
  job: string
  favoriteColor: string
}

function Home() {
  const { users } = useUsers()
  const [state, dispatch] = useReducer<ModalTransportReducerType<User | null>>(
    ModalTransportReducer,
    {
      data: null,
      modalType: 'INITIAL'
    }
  )

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center self-center text-center">
      {!users.data.length && <progress className="progress w-56"></progress>}

      {users.data.length > 0 && (
        <Fragment>
          <div className="mb-4 flex h-11 w-5/12 self-center">
            <div className="tooltip tooltip-right" data-tip="Adicionar usuário">
              <button className="btn">
                <UserCirclePlus size={24} />
              </button>
            </div>
          </div>

          <Table<User>
            data={users.data}
            columns={['', 'Name', 'Job', 'Favorite Color', '', '']}
            tHead={(col: string) => <TableHeader key={useId()} header={col} />}
            tBody={({ id, name, job, favoriteColor }) => (
              <TableRow<User>
                key={id}
                row={{ id, name, job, favoriteColor }}
                cell={dispatch}
              />
            )}
          />
        </Fragment>
      )}

      {state.modalType && (
        <Modal>
          <TableModal type={state.modalType} data={state.data!} />
        </Modal>
      )}
    </section>
  )
}

export { Home }
