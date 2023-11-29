import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home/Home'
import { DefaultLayout } from '../DefaultLayout'
import { History } from '../History'
export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path='/' element={<DefaultLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/history' element={<History />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Route>
            </Routes>
        </BrowserRouter>



    )
}