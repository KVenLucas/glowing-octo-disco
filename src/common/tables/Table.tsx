interface TableProps<TableData> {
  data: TableData[]
  tBody: (row: TableData) => React.ReactNode
  tHead: (col: string) => React.ReactNode
  columns: string[]
}

function Table<TableData>({
  data,
  tBody,
  tHead,
  columns
}: TableProps<TableData>) {
  return (
    <div className="s w-5/12 overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="active">{columns.map(tHead)}</tr>
        </thead>
        <tbody>{data.map(tBody)}</tbody>
      </table>
    </div>
  )
}

export { Table }
