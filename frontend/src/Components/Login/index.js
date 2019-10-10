import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';

import api from '../../Utils/api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const user = localStorage.getItem('user')

        if (user) {
            
            dispatch({
                type: 'ACTION_USER_LOGIN',
                data: true
            });

        }

    }, []);

    async function handleLogin(e) {

        e.preventDefault();

        if (!email || !password){

            alert('E-mail e senha devem ser informados');
            return;
        }

        try {

            const response = await api.get('/session', {
                headers: {
                    email,
                    password
                }
            });

            localStorage.setItem('user', JSON.stringify(response.data))
            
            dispatch({
                type: 'ACTION_USER_LOGIN',
                data: true
            });


        } catch (err) {

            console.clear();

            alert("Ooooops ! Usuário e/ou senha invalidos =[");

        } 

        
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
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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