import { User } from '../pages/Home'

interface UserDetails {
  data: User
}

function UserDetails({ data }: UserDetails) {
  return (
    data && (
      <div className="card flex-wrap items-center justify-center break-words">
        <div className="card-body flex-row justify-center gap-5">
          <div className="avatar items-center justify-center">
            <div className="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <div
            className="items-left max-w-5 flex w-full flex-col 
          gap-2 self-center break-all text-left"
          >
            <span className="card-title">{data.name}</span>
            <span>{data.job}</span>
            <span className="badge">{data.favoriteColor}</span>
          </div>
        </div>
      </div>
    )
  )
}

export { UserDetails }
