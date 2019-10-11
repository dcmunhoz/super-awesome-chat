import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import api from '../../Utils/api';

export default function ChatPanel() {
    const { user } = useSelector(store => store.user);
    const dispatch = useDispatch();

    function handleSignout() {

        localStorage.removeItem('user');
        console.log(localStorage);
        dispatch({
            type: 'ACTION_USER_LOGIN',
            data: {
                logged:false,
                user: {
                    email: '',
                    contacts: []
                }
            }
        })
    }

    async function handleShowNewContactPanel() {

        const email = prompt("Digite um email para adicionar a sua lista de contatos");

        const response = await api.get(`/user?email=${email}`, {
            headers:{
                user_id: user._id
            }
        });


        await dispatch({
            type: 'ACTION_USER_NEW_CONTACT',
            data: {
                user: response.data
            }
        });

        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(response.data));


    }

    return(
        <>
            <aside className='aside-container'>
                <header className='user-details'>
                    <span>{user.email}</span>

                    <button className='btn-red' onClick={handleSignout}>Sair</button>
                </header>

                <div className='contacts-box'>
                    <header>
                        <h4>Contatos</h4>
                        <button 
                            className="btn-red"
                            onClick={handleShowNewContactPanel}
                        >
                            novo
                        </button>
                    </header>

                    <div className='contacts-list'>

                        { user.contacts.map(contact => (
                            <div className="contact-item" key={contact._id}>
                                <span>{contact.email}</span>    
                            </div> 
                        )) }

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