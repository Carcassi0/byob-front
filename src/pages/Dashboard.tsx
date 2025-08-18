import style from './styles/Dashboard.module.scss';

function Dashboard() {
    return (
        <div className={style.pageWrapper}>
            <h2 className={style.title}>홈</h2>
            <h3 className={style.subTitle}>다가오는 와인회</h3>
        </div>
    );
}

export default Dashboard;
