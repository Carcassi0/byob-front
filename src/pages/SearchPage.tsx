import style from './styles/SearchPage.module.scss';
import img from '../assets/alotofwine.jpeg';
import { CalendarRange, MapPin, Search } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';

interface mockGatheringType {
    image: string;
    hostName: string;
    title: string;
    shortDescription: string;
    time: string;
    location: string;
}
function SearchPage() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredGatherings, setFilteredGatherings] = useState<mockGatheringType[]>([]);
    const mockGatherings: mockGatheringType[] = [
        {
            image: img,
            hostName: '최소영',
            title: '프리미엄 와인 테이스팅',
            shortDescription: '소믈리에와 함께하는 프리미엄 와인 테이스팅 모임.',
            time: '2025.08.30',
            location: 'Shirokanedai',
        },
        {
            image: img,
            hostName: '김철수',
            title: '와인 입문 클래스',
            shortDescription: '초보자를 위한 와인 입문 클래스와 네트워킹.',
            time: '2025.09.05',
            location: 'Gangnam',
        },
        {
            image: img,
            hostName: '박영희',
            title: '보르도 와인 집중 시음',
            shortDescription: '프랑스 보르도 와인 집중 시음 및 해설.',
            time: '2025.09.12',
            location: 'Itaewon',
        },
        {
            image: img,
            hostName: '이민준',
            title: '이탈리아 와인 페어링',
            shortDescription: '이탈리아 와인과 치즈 페어링 전문가 특강.',
            time: '2025.09.20',
            location: 'Hongdae',
        },
        {
            image: img,
            hostName: '정하늘',
            title: '비즈니스 네트워킹 파티',
            shortDescription: '와인과 함께하는 비즈니스 네트워킹 파티.',
            time: '2025.09.28',
            location: 'Yeouido',
        },
        {
            image: img,
            hostName: '오지현',
            title: '스페인 와인 타파스 체험',
            shortDescription: '스페인 와인과 타파스 페어링 체험 모임.',
            time: '2025.10.03',
            location: 'Seongsu',
        },
        {
            image: img,
            hostName: '윤지수',
            title: '내추럴 와인 트렌드',
            shortDescription: '내추럴 와인 트렌드와 시음회, 전문가 설명.',
            time: '2025.10.10',
            location: 'Apgujeong',
        },
        {
            image: img,
            hostName: '장도윤',
            title: '블라인드 테이스팅 챌린지',
            shortDescription: '와인 블라인드 테이스팅 챌린지, 상품 증정.',
            time: '2025.10.17',
            location: 'Mapo',
        },
        {
            image: img,
            hostName: '한예린',
            title: '와인과 클래식 음악',
            shortDescription: '와인과 클래식 음악의 만남, 감성 모임.',
            time: '2025.10.24',
            location: 'Bukchon',
        },
        {
            image: img,
            hostName: '백승우',
            title: '와인과 한식 페어링',
            shortDescription: '고급 와인과 한식 페어링, 셰프와 함께.',
            time: '2025.10.31',
            location: 'Jamsil',
        },
    ];

    const handleSearchSubmit = () => {};

    // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const query = e.target.value;
    //     setSearchQuery(query);
    //     if (query.length > 1) {
    //         debouncedSearch(query);
    //     } else {
    //         debouncedSearch('');
    //     }
    // };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (!query) {
            setFilteredGatherings([]);
            return;
        }

        const lower = query.toLowerCase();
        setFilteredGatherings(
            mockGatherings.filter(
                (g) =>
                    g.title.toLowerCase().includes(lower) ||
                    g.hostName.toLowerCase().includes(lower) ||
                    g.shortDescription.toLowerCase().includes(lower) ||
                    g.location.toLowerCase().includes(lower)
            )
        );
    };

    // const debouncedSearch = useCallback(
    //     debounce(async (query: string) => {
    //         if (!query) return;
    //         setIsSearching(true);

    //         try {
    //             // const response = await axiosInstance.get(
    //             // );
    //             // setSearchResult(response.data.content.slice(0, 8));
    //         } catch (error) {
    //             console.log(`검색 오류:${error}`);
    //         } finally {
    //             setIsSearching(false);
    //         }
    //     }, 500),
    //     []
    // );

    useEffect(() => {}, []);

    const GatheringCard = (info: mockGatheringType) => {
        return (
            <div className={style.card}>
                <div
                    className={style.card__img}
                    style={{ backgroundImage: `url(${info.image})` }}
                />
                <div className={style.card__detail}>
                    <p className={style.card__detail__hostName}>Hosted by {info.hostName}</p>
                    <h2 className={style.card__detail__title}>{info.title}</h2>
                    <p className={style.card__detail__shortDescription}>{info.shortDescription}</p>
                    <div className={style.infoSection}>
                        <p className={style.time}>
                            <CalendarRange size={17} />
                            {info.time}
                        </p>
                        <p className={style.location}>
                            <MapPin size={17} />
                            {info.location}
                        </p>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className={style.pageWrapper}>
            <h2 className={style.title}>와인회 찾기</h2>
            <div className={style.searchBar}>
                <div className={style.searchInputWrapper}>
                    <Search className={style.searchIcon} size={20} />
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="와인회 검색하기"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className={style.searchInput}
                        />
                    </form>
                </div>
                <button className={style.filterButton}>필터</button>
            </div>
            <nav className={style.filters}></nav>
            <div className={style.cardGrid}>
                {(searchQuery ? filteredGatherings : mockGatherings).map((item) => (
                    <GatheringCard
                        key={item.title + item.hostName}
                        image={item.image}
                        hostName={item.hostName}
                        title={item.title}
                        shortDescription={item.shortDescription}
                        time={item.time}
                        location={item.location}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchPage;
