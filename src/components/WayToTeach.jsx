export default function WayToTeach(props){
    return(
    <li className="wayToTeach">
        <p className="pWayToTeach">
            <strong>{props.title}</strong>{props.description}
        </p>
    </li>
    )
  }