import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './views/Home'
import {Layout} from 'antd'
import './index.css'
import 'antd/dist/antd.less'

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

function startApp(): void {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <Layout>
                {/*<Layout.Header>Header</Layout.Header>*/}
                <Layout.Content>
                    <Router>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="/" element={ <App/> }>
                                <Route path="home" element={ <Home /> }></Route>
                            </Route>
                            <Route path="*" element={ <Navigate replace to="/home" />}></Route>
                        </Routes>
                    </Router>
                </Layout.Content>
                {/*<Layout.Footer>Footer</Layout.Footer>*/}
            </Layout>
        </React.StrictMode>
    )
}
startApp()