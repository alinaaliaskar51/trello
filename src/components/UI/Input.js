

const Input = (props) => {
  return (
    <div>
      <input  placeholder={props.placeholder} onChange={props.onchange} type={props.type} value={props.value}/>
    </div>
  )
}

export default Input
