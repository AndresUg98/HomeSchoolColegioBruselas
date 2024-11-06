import './login.css'
import {Input} from '../../components/Input'
import { Button } from '../../components/Button'

function Login() {

  return (
    <section className='login'>
      <div className='input-container'>
        <Input placeholder="Correo electronico" type="text"/>
        <Input placeholder="Contraseña" type="password"/>
      </div>
      <Button className={"login-button"} type={"submit"} text={"Iniciar sesión"}/>
      <p>o</p>
      <Button className={"Otherlogin-button"} type={"button"} text={"Google, face.."}/>
    </section>
  )
}

export default Login