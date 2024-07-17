import '../index.css'
export default function Button({children, handleClick, isActive}) {
    
  return <button className = {isActive? 'button active': 'button'} onClick={handleClick}>{children}</button>
}
