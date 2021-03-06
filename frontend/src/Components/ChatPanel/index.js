import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import api from '../../Utils/api';

const socketio = require('socket.io-client');

export default function ChatPanel() {
    const { user, active_chat } = useSelector(store => store.user);
    const [activeId, setActiveId] = useState('');
    const [sendMessage, setSendMessage] = useState('');
    const dispatch = useDispatch();

    const socket = useMemo(() => socketio.connect(`http://localhost:3003`, { query: {user_id: user._id} }), [user._id]);

    useEffect(() => {

        socket.on('RECIVED_MESSAGE', data => {
    
            if (activeId == data.from) {
                dispatch({
                    type: 'NEW_MESSAGE_RECIVED',
                    data: data 
                })
            }
        });

    }, [activeId]);

    function handleSignout() {

        localStorage.removeItem('user');
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

        const response = await api.post(`/newContact`, {
            email,
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

    async function handleActiveChat(e) {
        const { user_id } = e.target.dataset;

        const response = await api.get(`/user/${user_id}`, { user_id });

        await dispatch({
            type: 'ACTION_CHANGE_ACTIVE_CHAT',
            data: {
                active_chat: response.data
            }
        });

        setActiveId(response.data._id);

    }

    async function handleSendMessage(e) {
        e.preventDefault();

        if (!active_chat._id) {

            alert("Selecione um contato para enviar uma mensagem !");
            return;

        }
        
        let date = new Date();

        const message = {
            from: user._id,
            to: active_chat._id,
            body: sendMessage,
            hora: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        };

        await dispatch({
            type: 'NEW_CHAT_MESSSAGE',
            data: message 
        });

        setSendMessage('');

        socket.emit('NEW_MESSAGE', { message });

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
                            <div className="contact-item" key={contact._id} data-user_id={contact._id} onClick={ e => handleActiveChat(e) }>
                                {contact.email}   
                            </div> 
                        )) }

                    </div>
                </div>
            </aside>

            <div className='message-box-container'>
                <header className='message-contact'>
                    Conversando com <strong>{ active_chat.email ? active_chat.email : 'ninguem' }</strong>
                </header>
                <div className='message-box'>
                    <div className='messages-container'>

                        <div className="messages">

                            {active_chat.messages.map(message => {
                                console.log();
                                return(
                                    <div className={`message-row ${message.from != user._id ? 'out' : ''} `} key={`${message.body}-${Math.random()}`}>
                                        <div className="message-body" >
                                            <div className='message-content'>
                                                { message.body }
                                            </div>
                                            <footer>
                                                { message.hora }
                                            </footer>
                                        </div>
                                    </div> 
                                )
                            })}                           
                            
                        </div>

                    </div>

                    <div className='footer-input'>
                        <form action="" onSubmit={handleSendMessage}>
                            <input type="text" placeholder='Sua Mensagem' value={sendMessage} onChange={e => setSendMessage(e.target.value)} />

                            <button ><i className="material-icons"> send </i></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}