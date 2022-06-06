import { Check } from 'phosphor-react'
import { Fragment, useState } from 'react'
import { useUsers } from '../context/users.context'
import { User } from '../pages/Home'

import { instance } from '../services'
import { UserDetails } from './UserDetails'

interface UpdateUserProps {
  data: User
}

function UpdateUser({ data }: UpdateUserProps) {
  const { setUsers } = useUsers()
  const [user, setUser] = useState<User>(data)

  if (user.id !== data.id) setUser(data)

  async function updateUser(user: User) {
    const response = await instance.put<User>(`users/${user.id}`, user)

    const { data } = response

    setUsers({ type: 'UPDATE', payload: { ...data } })

    setUser(data)
  }

  return (
    data && (
      <Fragment>
        <UserDetails data={user} />

        <div className="justify-left card-body flex items-center">
          <div className="form-control w-full  gap-2">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              value={user.name}
              type="text"
              onChange={event =>
                setUser(prev => ({ ...prev, name: event.target.value }))
              }
              placeholder={data.name}
              className="input input-primary w-full border-none outline-none outline-1 outline-primary"
            />

            <label className="label">
              <span className="label-text">Job</span>
            </label>

            <input
              value={user.job}
              type="text"
              onChange={event =>
                setUser(prev => ({ ...prev, job: event.target.value }))
              }
              placeholder={data.job}
              className="input input-primary w-full border-none outline-none outline-1 outline-primary"
            />

            <label className="label">
              <span className="label-text">Favorite color</span>
            </label>

            <input
              value={user.favoriteColor}
              type="text"
              onChange={event =>
                setUser(prev => ({
                  ...prev,
                  favoriteColor: event.target.value
                }))
              }
              placeholder={data.favoriteColor}
              className="input input-primary w-full border-none outline-none outline-1 outline-primary"
            />
          </div>

          <div className="mt-6 flex w-full place-content-end">
            <div>
              <button
                className="btn btn-sm gap-1"
                onClick={() => updateUser(user)}
              >
                <span className="block">Salvar</span>
                <Check size={24} />
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  )
}

export { UpdateUser }
