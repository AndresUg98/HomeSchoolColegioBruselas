import './Button.css'


// eslint-disable-next-line react/prop-types
function Button({className, type, text}) {

  return (
      <button className={className} type={type}>{text}</button>
  )
}

export {Button}