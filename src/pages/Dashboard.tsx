import UpcomingGatheringCard from '../components/gathering/UpcomingGatheringCard';
import style from './styles/Dashboard.module.scss';

function Dashboard() {
    return (
        <div className={style.pageWrapper}>
            <h2 className={style.title}>홈</h2>
            <h3 className={style.subTitle}>대시보드</h3>
            <div className={style.dashboardContainer}>
                <div className={style.alertContainer}></div>
                <div className={style.actionContainer}></div>
            </div>
            <h3 className={style.subTitle}>다가오는 와인회</h3>
            <div className={style.upcomingContainer}>
                <UpcomingGatheringCard />
                <UpcomingGatheringCard />
            </div>
            <span className={style.divider}></span>
            <h3 className={style.subTitle}>추천 친구</h3>
        </div>
    );
}

export default Dashboard;
