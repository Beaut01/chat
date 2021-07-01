import React, { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '../App'
import firebase from 'firebase'

import { Message } from '../components/Message'

export const Chat = () => {
    const [value, setValue] = useState('')

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    console.log(messages);

    const sendMessage = async () => {
        if(value != ''){
            firestore.collection('messages').add({
                id: user.uid,
                name: user.displayName,
                email: user.email,
                message: value,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setValue('')
        }
    }

    if(loading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }


    return(
        <div className='chat' style={{height: window.innerHeight - 75}}>
            <div className='container'>
                <div className='chat__messages' style={{height: window.innerHeight - 170}}>
                    {messages.map(item => <Message message={item} key={item.createdAt} user={user} />)}
                </div>
                <div className='chat__input'>
                    <input 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className='button button__login' onClick={sendMessage}>
                        <span>Отправить</span>
                    </button>
                </div>
            </div>
        </div>
    )
}