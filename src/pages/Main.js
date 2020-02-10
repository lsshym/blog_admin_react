import React from 'react'
import { Login } from './Login'
import AdminIndex from './AdminIndex'
import { ArticleList } from './ArticleList'

import { BrowserRouter, Route, HashRouter } from 'react-router-dom'

const Main = () => {
    return (
        <HashRouter>
            <Route path="/" exact component={Login}></Route>
            <Route path="/index/" component={AdminIndex}></Route>
        </HashRouter>
    )
}

export default Main