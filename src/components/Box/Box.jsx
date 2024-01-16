import "../Maincard/maincard.css"
function Box  (props) {
  const itemClass = props.image.status ? " active " + props.image.status : "";
  return (
    <div className={" box " + itemClass} onClick={() => props.handleClick(props.index)}>
    <img src={props.image.superHero} alt="image" />
    </div>
  )
}

export default Box;