import style from './ReviewCard.module.scss';
import avatarImg from '../../assets/avatar.png';
import { Star } from 'lucide-react';

function ReviewCard() {
    return (
        <div className={style.container}>
            <div className={style.profileContainer}>
                <div
                    className={style.profileContainer__avatar}
                    style={{
                        backgroundImage: `url(${avatarImg})`,
                    }}
                />
                <div className={style.profileContainer__testSection}>
                    <h3 className={style.name}>Mim mi Yeonwu</h3>
                    <p className={style.date}>2025.08.21</p>
                </div>
            </div>
            <div className={style.rating}>
                <Star style={{ color: 'ea2a33' }} />
                <Star style={{ color: 'ea2a33' }} />
                <Star style={{ color: 'ea2a33' }} />
                <Star style={{ color: 'ea2a33' }} />
            </div>
            <div className={style.reviewText}>
                밈미미미미미밈미밈미미에우에웅미에웅미미미미미미미메옹이밈미미미미미미미미미밈밈밈밈ㅁ밈ㅁ밈
            </div>
        </div>
    );
}

export default ReviewCard;
