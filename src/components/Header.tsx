import style from './styles/Header.module.scss';
import avatarImg from '../assets/avatar.png';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <header className={style.containerWrapper}>
            <div className={style.container}>
                <h1 className={style.logo} onClick={() => navigate('/main')}>
                    WineShare
                </h1>
                <div className={style.profileContainer}>
                    <div
                        className={style.avatar}
                        style={{
                            backgroundImage: `url(${avatarImg})`,
                        }}></div>
                    <div className={style.profileContainer__testSection}>
                        <h1 className={style.name}>위의종</h1>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
