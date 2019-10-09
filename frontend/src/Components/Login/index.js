import React from 'react';
import './index.css';

export default function Login() {

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
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha *</label>
                        <input 
                            type="text" 
                            id="password" 
                            placeholder='Sua senha super secreta'
                        />
                    </div>

                    <button className='btn'>
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