import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';

export default function ChatPanel() {
    const { user_logged } = useSelector(store => store.user);
    const dispatch = useDispatch();

    function handleSignout() {
        dispatch({
            type: 'ACTION_USER_LOGIN',
            data: false
        })
    }

    return(
        <>
            <aside className='aside-container'>
                <header className='user-details'>
                    <span>Daniel Munhoz</span>

                    <button className='btn-red' onClick={handleSignout}>Sair</button>
                </header>

                <div className='contacts-box'>
                    <header>
                        <h4>Contatos</h4>
                    </header>

                    <div className='contacts-list'>
                        <div className="contact-item">
                            <span>Daniel Costa Munhoz</span>    
                        </div>     

                        <div className="contact-item">
                            <span>Usuário 2</span>    
                        </div>     

                        <div className="contact-item">
                            <span>Usuário 3</span>    
                        </div>                        
                    </div>
                </div>
            </aside>

            <div className='message-box-container'>
                <header className='message-contact'>
                    Conversando com ....
                </header>
                <div className='message-box'>
                    <div className='messages-container'>

                        <div className="messages">

                            <div className="message-row">
                                <div className="message-body">
                                    <div className='message-content'>
                                        Olá mensagem
                                    </div>
                                    <footer>
                                        22:35
                                    </footer>
                                </div>
                            </div>

                            <div className="message-row out">
                                <div className="message-body">
                                    <div className='message-content'>
                                        Olá mensageeeeeeeeeeeeeeeeeeeeeeem
                                    </div>
                                    <footer>
                                        22:35
                                    </footer>
                                </div>
                            </div>

                            <div className="message-row out">
                                <div className="message-body">
                                    <div className='message-content'>
                                        Olá mensageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeem
                                    </div>
                                    <footer>
                                        22:35
                                    </footer>
                                </div>
                            </div>

                            <div className="message-row">
                                <div className="message-body">
                                    <div className='message-content'>
                                        Olá mensagem
                                    </div>
                                    <footer>
                                        22:35
                                    </footer>
                                </div>
                            </div>

                            <div className="message-row out">
                                <div className="message-body">
                                    <div className='message-content'>
                                        Olá mensageeeeeeeeeeeeeeeeeeeeeeem
                                    </div>
                                    <footer>
                                        22:35
                                    </footer>
                                </div>
                            </div>

                            <div className="message-row out">
                                <div className="message-body">
                                    <div className='message-content'>
                                        Olá mensageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeem
                                    </div>
                                    <footer>
                                        22:35
                                    </footer>
                                </div>
                            </div>

                            <div className="message-row out">
                                <div className="message-body">
                                    <div className='message-content'>
                                        Olá mensagem
                                    </div>
                                    <footer>
                                        22:35
                                    </footer>
                                </div>
                            </div>

                            <div className="message-row">
                                <div className="message-body">
                                    <div className='message-content'>
                                        Olá mensageeeeeeeeeeeeeeeeeeeeeeem
                                    </div>
                                    <footer>
                                        22:35
                                    </footer>
                                </div>
                            </div>

                            <div className="message-row">
                                <div className="message-body">
                                    <div className='message-content'>
                                        Olá mensageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeem
                                    </div>
                                    <footer>
                                        22:35
                                    </footer>
                                </div>
                            </div>

                            <div className="message-row">
                                <div className="message-body">
                                    <div className='message-content'>
                                        Olá mensagem
                                    </div>
                                    <footer>
                                        22:35
                                    </footer>
                                </div>
                            </div>

                            <div className="message-row">
                                <div className="message-body">
                                    <div className='message-content'>
                                        Olá mensageeeeeeeeeeeeeeeeeeeeeeem
                                    </div>
                                    <footer>
                                        22:35
                                    </footer>
                                </div>
                            </div>

                            <div className="message-row">
                                <div className="message-body">
                                    <div className='message-content'>
                                        Olá mensageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeem
                                    </div>
                                    <footer>
                                        22:35
                                    </footer>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                    <div className='footer-input'>
                        <form action="">
                            <input type="text" placeholder='Sua Mensagem'/>

                            <button><i className="material-icons"> send </i></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}