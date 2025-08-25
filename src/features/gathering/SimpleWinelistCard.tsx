import style from './SimpleWinelistCard.module.scss';
import avatarImg from '../../assets/avatar.png';
import type { wineinfo } from '../../types/wineinfo';

function SimpleWinelistCard(prop: wineinfo) {
    return (
        <div className={style.container}>
            <div className={style.titleSection}>
                <div className={style.wineInfo}>
                    <h3 className={style.nameAndVintage}>
                        {prop.name} - {prop.vintage}
                    </h3>
                    <p className={style.producer}>{prop.producer}</p>
                </div>
                <div className={style.profileContainer}>
                    <div
                        className={style.avatar}
                        style={{
                            backgroundImage: `url(${avatarImg})`,
                        }}></div>
                    <div className={style.profileContainer__testSection}>
                        <p className={style.name}>지참자: 위의종</p>
                    </div>
                </div>
            </div>
            <p className={style.detailInfo}>추가 정보 공간입니다</p>
        </div>
    );
}

export default SimpleWinelistCard;
