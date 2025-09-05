import { User, LayoutDashboard, Search, ScrollText, Wine } from 'lucide-react';
import style from './SideBar.module.scss';
import { Link } from 'react-router-dom';

function SideBar() {
    // const location = useLocation();
    // const path = location.pathname;

    // useEffect(() => {
    //     const currentMenu = (path: string) => {
    //         if (path.includes('recommend')) return '추천 공고';
    //         if (path.includes('bookmark')) return '북마크';
    //         if (path.includes('manage')) return '지원 관리';
    //         if (path.includes('mycv')) return '나의 CV';
    //         if (path.includes('dashboard')) return '대시보드';
    //         if (path.includes('jobManage')) return '공고 관리';
    //         if (path.includes('feedback')) return '피드백 관리';
    //     };
    //     const current = currentMenu(path);
    //     setActiveContent(current ?? '');
    // }, [path]);
    const userMenuItems = [
        {
            id: '홈',
            path: 'dashboard',
            icon: LayoutDashboard,
        },
        {
            id: '와인회 찾기',
            path: 'search',
            icon: Search,
        },

        {
            id: '나의 셀러',
            path: 'mycellar',
            icon: Wine,
        },
        {
            id: '위시리스트',
            path: 'wishlist',
            icon: ScrollText,
        },
        {
            id: '마이페이지',
            path: 'mypage',
            icon: User,
        },
    ] as const;

    return (
        <div className={style.container}>
            <nav className={style.menuRail}>
                {userMenuItems.map((item) => (
                    <a key={item.id} className={style.menuItem}>
                        <Link to={item.path} className={style.menuItem__link}>
                            <item.icon size={24} className={style.menuItem__icon} />
                            <span className={style.menuItem__text}>{item.id}</span>
                        </Link>
                    </a>
                ))}
            </nav>
        </div>
    );
}

export default SideBar;
