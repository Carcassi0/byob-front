import style from './styles/Landing.module.scss';
import backgroundImg from '../assets/LandingBackground.jpeg';
import Header from '../components/Header';

function Landing() {
    return (
        <div className={style.pageContainer}>
            <Header />
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
        </div>
    );
}

export default Landing;
