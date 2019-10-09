import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import Container from './Container';
import Login from './Login';
import ChatPanel from './ChatPanel';

export default function App(){
    // const [logged, setLogged] = useState(false);
    const { user_logged } = useSelector(store => store.user);
    const [container, setContainer] = useState(null);

    useEffect(() => {

        setContainer(null);

        setTimeout(()=>{setContainer(showContainer)}, 100);


    }, [user_logged]);

    function showContainer(){
        if (!user_logged){
            return(
                <Container >
                    <Login />
                </Container>
            )
        }else{
            return(
                <Container >
                    <ChatPanel />
                </Container>
            )
        }

    }    

    return(
        <div id="app">
            
            {container}

        </div>
    )
}