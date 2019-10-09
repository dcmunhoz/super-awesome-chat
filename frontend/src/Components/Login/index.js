import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';

export default function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    function handleLogin(e) {

        e.preventDefault();

        dispatch({
            type: 'ACTION_USER_LOGIN',
            data: true
        });
        
    }

    return(
        <>
            <div className='login-box'> 

                <header>
                    <h1>Login</h1>
                </header>

                <form className='form-login'>

                    <div className="form-group">
                        <label htmlFor="login">E-mail *</label>
                        <input 
                            type="email" 
                            id="login" 
                            placeholder='Seu e-mail super maneiro'
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha *</label>
                        <input 
                            type="text" 
                            id="password" 
                            placeholder='Sua senha super secreta'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <button className='btn' onClick={handleLogin}>
                        Entrar
                    </button>

                </form>
            </div>

            <div className='welcome-message'>
                <h1>Bem vindo</h1>
                <p>Este é o chat super incrivel =D</p>
            </div>
        </>
    )

}