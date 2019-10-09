import React, { useState } from 'react';

import Container from './Container';
import Login from './Login';
import ChatPanel from './ChatPanel';

export default function App() {
    const [logged, setLogged] = useState(false);

    return(
        <div id="app">
            
            {!logged ? (
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