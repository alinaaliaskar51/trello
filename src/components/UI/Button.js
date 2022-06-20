
const Button = (props) => {
  return (
    
      <button onClick={props.click} {...props}>{props.text}</button>
    
  )
}

export default Button
