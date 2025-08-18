import { Outlet } from 'react-router-dom';
import style from './styles/MainPage.module.scss';
import SideBar from '../components/sidebar/SideBar';

function MainPage() {
    return (
        <div className={style.page}>
            <SideBar />
            <Outlet />
        </div>
    );
}

export default MainPage;
