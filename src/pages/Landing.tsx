import { useNavigate } from 'react-router-dom';
import style from './styles/Landing.module.scss';
import backgroundImg from '../assets/LandingBackground.jpeg';

function Landing() {
    const navigate = useNavigate();
    const handleMoveToMainPage = async () => {
        navigate('/main');
    };
    return (
        <div className={style.pageContainer}>
            <div className={style.header}>
                <h1 className={style.logo}>Logo</h1>
                <div className={style.action}>
                    <button>와인회 검색</button>
                    <button>시작하기</button>
                </div>
            </div>
            <div
                className={style.heroContainer}
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                }}>
                <h1 className={style.heroContainer__title}>Share Your Bottle</h1>
                <h1 className={style.heroContainer__title}>Connect With WineLovers</h1>
                {/* <h1 className={style.heroContainer__title}>ボトルをシェアしよう</h1>
                <h1 className={style.heroContainer__title}>ワインラバーとつながろう</h1> */}
            </div>
            <div className={style.container}>
                <h1 className={style.container__title}>Your best BYOB Platform</h1>
            </div>

            <button onClick={handleMoveToMainPage}>메인페이지로 이동</button>
        </div>
    );
}

export default Landing;
