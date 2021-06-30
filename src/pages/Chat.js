import React, { useState } from 'react'

export const Chat = () => {
    const [value, setValue] = useState('')

    return(
        <div className='chat' style={{height: window.innerHeight - 75}}>
            <div className='container'>
                <div className='chat__messages' style={{height: window.innerHeight - 180}}>

                </div>
                <div className='chat__input'>
                    <input 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className='button button__login' onClick={() => console.log(value)}>
                        <span>Отправить</span>
                    </button>
                </div>
            </div>
        </div>
    )
}