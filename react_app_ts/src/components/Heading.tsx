type HeadingProps = {
  children: string
}

function Heading({children}: HeadingProps) {
  return (
    <div>Heading {children}</div>
  )
}

export default Heading