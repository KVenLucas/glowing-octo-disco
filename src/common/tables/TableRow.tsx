import { useId } from 'react'
import { Action } from '../../reducers'

interface TableRowProps<T> {
  row: T & { id: number }
  cell: React.Dispatch<Action<T | null>>
}

function TableRow<T>({ row, cell }: TableRowProps<T>) {
  return (
    <tr className="hover" key={row.id}>
      {Object.entries(row).map(([_, v]) => (
        <td key={useId()}>{v}</td>
      ))}

      <th>
        <label
          onClick={() =>
            cell({
              payload: {
                data: row,
                modalType: 'USER_DETAILS'
              }
            })
          }
          htmlFor="modal"
          className="modal-button btn btn-ghost btn-sm"
        >
          Details
        </label>
      </th>

      <th>
        <label
          onClick={() =>
            cell({
              payload: {
                data: row,
                modalType: 'UPDATE_USER'
              }
            })
          }
          htmlFor="modal"
          className="modal-button btn btn-ghost btn-sm"
        >
          Edit
        </label>
      </th>
    </tr>
  )
}

export { TableRow }
