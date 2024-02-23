type OscarProps = {
    children: React.ReactNode
}

function Oscar({children}: OscarProps) {
  return (
    <div>Oscar goes to Leonardo Dicpario!  {children}</div>
  )
}

export default Oscar