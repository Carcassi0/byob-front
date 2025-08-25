import style from './WineCard.module.scss';
import wineImg from '../../assets/wine.jpeg';
import type { wineinfo } from '../../types/wineinfo';

function WineCard(props: wineinfo) {
    return (
        <div className={style.container}>
            <div
                className={style.img}
                style={{
                    backgroundImage: `url(${wineImg})`,
                }}
            />
            <h3 className={style.producer}>{props.producer}</h3>
            <p className={style.vintage}>{props.vintage}</p>
            <p className={style.name}>{props.name}</p>
            <button className={style.button}>삭제하기</button>
        </div>
    );
}

export default WineCard;
