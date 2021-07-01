import React, { useContext } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Context } from '../App'
import { useAuthState } from 'react-firebase-hooks/auth'

import { Chat } from '../pages/Chat'
import { Login } from '../pages/Login'

/**
 * Функция, осуществляющая роутинг
 * @returns JSX.Element
 */
export const Router = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ?
        (
            <Switch>
                <Route component={Chat} path='/chat' exact={true} />
                <Redirect to='/chat' />
            </Switch>
        )
        :
        (
            <Switch>
                <Route component={Login} path='/login' exact={true}/>
                <Redirect to='/login' />
            </Switch>
        )
}