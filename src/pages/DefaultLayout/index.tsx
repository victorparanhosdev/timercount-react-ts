import { Outlet } from "react-router-dom"


export function DefaultLayout(){
    return(
        <div>
            <header>
                <h1>LOGO AQUI</h1>
                <h2>MENU AQUI</h2>
            </header>
            <Outlet />
        </div>
    )
}