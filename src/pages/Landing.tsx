import { useNavigate } from 'react-router-dom';
import style from './styles/MainPage.module.scss';

function Landing() {
    const navigate = useNavigate();
    const handleMoveToMainPage = async () => {
        navigate('/main');
    };
    return (
        <div className={style.page}>
            <h1>랜딩페이지</h1>
            <button onClick={handleMoveToMainPage}>메인페이지로 이동</button>
        </div>
    );
}

export default Landing;
