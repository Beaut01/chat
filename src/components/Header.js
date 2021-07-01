import React, {useContext} from 'react'
import { Context } from '../App'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'

/**
 * Функция, которая отрисовывает Header  
 * @returns JSX.Element
 */
export const Header = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth) 
    /**
     * Функция выхода из чата
     */
    const logout = () => {
        firebase.auth().signOut()
    }

    return(
        <div className='header'>
            <div className='container'>
                <div className='header__title'>
                    <p>Chat</p>
                    {user ?
                        <button className='button button__header' onClick={logout}>
                            <span>
                                Выйти
                            </span>
                        </button>
                        :
                        <p>Авторизация через Google</p>
                    }
                </div>
            </div>
        </div>
    )
}