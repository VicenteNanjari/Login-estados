import React, { useState } from 'react'
import Alert from './Alert'


const Login = () => {
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')   
    const [error, setError] = useState(false)    
    const [alert, setAlert] = useState(false)

    const handleSubmit = (e) => {
        const users =
            [{
                "correo": "ejemplo123@gmail.com",
                "pass": "1234"
            }]
        
        const correo = users[0].correo
        const pass = users[0].pass

        e.preventDefault()
        if (email.trim() === '' || contraseña.trim() === '') {
            setError(true)
            return
        } else if (email === correo && contraseña === pass) {
            setError(false)
            setAlert(true)
            return
        }
        setAlert(true)
        setError(true)
        setEmail('')
        setContraseña('')
    }

    const handleChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const handleChangePassword = (e) => {
        const value = e.target.value
        setContraseña(value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>E-mail</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={handleChangeEmail}
                    value={email} />
                <label>Contraseña</label>
                <input
                    type="password"
                    name="contraseña"
                    className="form-control"
                    onChange={handleChangePassword}
                    value={contraseña} />
                <button type="submit" disabled={!email.trim() || !contraseña.trim()}>Enviar</button>
                {!alert ? null : error ? <Alert message="Usuario incorrecto :(" type="danger" /> : <Alert message="Usuario correcto!" type="success" />}
            </form>
        </div>
    )
}

export default Login