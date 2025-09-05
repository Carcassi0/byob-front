import { Outlet } from 'react-router-dom';
import style from './styles/MainPage.module.scss';
import SideBar from '../features/sidebar/SideBar';
import Header from '../components/Header';

function MainPage() {
    return (
        <div className={style.page}>
            <Header />
            <SideBar />
            <Outlet />
        </div>
    );
}

export default MainPage;
