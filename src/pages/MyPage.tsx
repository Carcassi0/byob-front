import style from './styles/MyPage.module.scss';
import { Star } from 'lucide-react';

import ReviewCard from '../components/review/ReviewCard';

function MyPage() {
    return (
        <div className={style.pageWrapper}>
            {/* 만약 다른 사람이 접속하면 마이페이지는 아바타와 유저 이름으로 바뀜 */}
            <h2 className={style.title}>마이페이지</h2>
            {/* <div className={style.profileContainer}>
                <div
                    className={style.avatar}
                    style={{
                        backgroundImage: `url(${avatarImg})`,
                    }}></div>
                <div className={style.profileContainer__testSection}>
                    <h1 className={style.name}>Mim mi Yeon</h1>
                </div>
            </div> */}
            <div className={style.summary}>
                <h3 className={style.subTitle}>요약</h3>
                <div className={style.summary__cardRail}>
                    <div className={style.summary__card}>
                        <div className={style.summary__card__rating}>
                            <p className={style.summary__card__number}>4.3</p>
                            <Star className={style.summary__card__ratingIcon} />
                        </div>
                        <p className={style.summary__card__title}>활동 평점</p>
                    </div>
                    <div className={style.summary__card}>
                        <p className={style.summary__card__number}>5</p>
                        <p className={style.summary__card__title}>주최한 와인회</p>
                    </div>
                    <div className={style.summary__card}>
                        <p className={style.summary__card__number}>12</p>
                        <p className={style.summary__card__title}>참석한 와인회</p>
                    </div>
                </div>
            </div>
            <div className={style.activityLog}>
                <div className={style.subTitle}>활동이력</div>
                <div className={style.activityLog__rail}>
                    <div className={style.activityLog__card}>
                        <p className={style.activityLog__card__title}>'뒤작 몰아마시기'를 주최함</p>
                        <p className={style.activityLog__card__date}>25년 1월 5일</p>
                    </div>
                    <div className={style.activityLog__card}>
                        <p className={style.activityLog__card__title}>'뒤작 몰아마시기'를 주최함</p>
                        <p className={style.activityLog__card__date}>25년 1월 5일</p>
                    </div>
                    <div className={style.activityLog__card}>
                        <p className={style.activityLog__card__title}>'뒤작 몰아마시기'를 주최함</p>
                        <p className={style.activityLog__card__date}>25년 1월 5일</p>
                    </div>
                    <div className={style.activityLog__card}>
                        <p className={style.activityLog__card__title}>'뒤작 몰아마시기'를 주최함</p>
                        <p className={style.activityLog__card__date}>25년 1월 5일</p>
                    </div>
                    <div className={style.activityLog__card}>
                        <p className={style.activityLog__card__title}>'뒤작 몰아마시기'를 주최함</p>
                        <p className={style.activityLog__card__date}>25년 1월 5일</p>
                    </div>
                    <div className={style.activityLog__card}>
                        <p className={style.activityLog__card__title}>'뒤작 몰아마시기'를 주최함</p>
                        <p className={style.activityLog__card__date}>25년 1월 5일</p>
                    </div>
                    <div className={style.activityLog__card}>
                        <p className={style.activityLog__card__title}>'뒤작 몰아마시기'를 주최함</p>
                        <p className={style.activityLog__card__date}>25년 1월 5일</p>
                    </div>
                    <div className={style.activityLog__card}>
                        <p className={style.activityLog__card__title}>'뒤작 몰아마시기'를 주최함</p>
                        <p className={style.activityLog__card__date}>25년 1월 5일</p>
                    </div>
                    <div className={style.activityLog__card}>
                        <p className={style.activityLog__card__title}>'뒤작 몰아마시기'를 주최함</p>
                        <p className={style.activityLog__card__date}>25년 1월 5일</p>
                    </div>
                </div>
            </div>

            <div className={style.review}>
                <h2 className={style.subTitle}>리뷰</h2>
                <div className={style.review__contents}>
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </div>
        </div>
    );
}

export default MyPage;
