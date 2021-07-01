import React from 'react'

export const Message = ({message, user}) => {
    return(
        <div className={ user.uid == message.id ? 'message__own' : 'message' }>
            <div className="message__info">
                <p className='message__info-name'>{message.name}</p>
            </div>
            <div className={ user.uid == message.id ? 'message__ownText' : 'message__text'}>
                <p>{message.message}</p>
            </div>
        </div>
    )
}