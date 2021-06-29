import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import { Chat } from '../pages/Chat'
import { Login } from '../pages/Login'

export const Router = () => {
    const isAuth = true
    return isAuth ?
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