interface TableHeaderProps {
  header: string
}

function TableHeader({ header }: TableHeaderProps) {
  return <th>{header}</th>
}

export { TableHeader }
