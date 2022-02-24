import './Card.css'

const Card = (props:any) =>{
    const classes =  props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card