import './Input.css'

// eslint-disable-next-line react/prop-types
function Input({placeholder, type}) {

  return (
    <input className='input' type={type} placeholder={placeholder} />
  )
}

export  {Input}