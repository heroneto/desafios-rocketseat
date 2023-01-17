import { Outlet } from 'react-router-dom'
import './styles.scss'

export function Layout() {

    return (
        <div className="container">
            <div className="top-bar">
                <span className='title'>Desafios Rocketseat - Heron</span>
            </div>
            <div className='content'>

            <Outlet />
            </div>
        </div>
    )
}