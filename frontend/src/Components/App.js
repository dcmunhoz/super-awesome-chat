import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Container from './Container';
import Login from './Login';
import ChatPanel from './ChatPanel';

export default function App() {
    // const [logged, setLogged] = useState(false);
    const { user_logged } = useSelector(store => store.user);

    useEffect(() => {
        console.log(user_logged);
    },[])


    return(
        <div id="app">
            
            {!user_logged ? (
                <Container>
                    <Login />
                </Container>
            ) : (
                <Container>
                    <ChatPanel />
                </Container>
            ) }

        </div>
    )
}