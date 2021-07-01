import React, { useContext } from 'react'
import { Context } from '../App'
import firebase from 'firebase'

/**
 * Отрисовывает блок входа.
 * @returns JSX.Element
 */
export const Login = () => {
    const {auth} = useContext(Context)

    /**
     * Асинхронная функция входа 
     */
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
    }

    return(
        <div className='login' style={{height: window.innerHeight - 75}}>
            <div className='login__wrapper'>
                <button className='button button__login' onClick={login}>
                    <span>Войти</span>
                </button>
            </div>
        </div>
    )
}