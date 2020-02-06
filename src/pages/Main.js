import React from 'react'
import { Login } from './Login'
import AdminIndex from './AdminIndex'
import { ArticleList } from './ArticleList'

import { BrowserRouter, Route } from 'react-router-dom'

const Main = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}></Route>
            <Route path="/index/" component={AdminIndex}></Route>
        </BrowserRouter>
    )
}

export default Main