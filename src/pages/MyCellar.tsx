import { Search } from 'lucide-react';
import style from './styles/MyCellar.module.scss';
import { useRef, useState } from 'react';
import type { wineinfo } from '../types/wineinfo';
import WineCard from '../components/winecard/WineCard';

function MyCellar() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredWinelist, setFilteredWinelist] = useState<wineinfo[]>([]);

    const handleSearchSubmit = () => {};

    const mockWinelist: wineinfo[] = [
        {
            producer: 'Claude Dugat',
            name: 'Gevrey Chambertin',
            vintage: 2017,
            region: 'Bourgogne, France',
            purchaseDate: '2025년 2월',
        },
        {
            producer: 'Chateau Margaux',
            name: 'Chateau Margaux',
            vintage: 2015,
            region: 'Bordeaux, France',
            purchaseDate: '2023년 6월',
        },
        {
            producer: 'Opus One',
            name: 'Opus One',
            vintage: 2018,
            region: 'Napa Valley, USA',
            purchaseDate: '2024년 1월',
        },
        {
            producer: 'Giacomo Conterno',
            name: 'Barolo Riserva',
            vintage: 2013,
            region: 'Piedmont, Italy',
            purchaseDate: '2022년 9월',
        },
        {
            producer: 'Penfolds',
            name: 'Penfolds Grange',
            vintage: 2016,
            region: 'South Australia, Australia',
            purchaseDate: '2023년 12월',
        },
        {
            producer: 'Vega Sicilia',
            name: 'Vega Sicilia Unico',
            vintage: 2010,
            region: 'Ribera del Duero, Spain',
            purchaseDate: '2024년 3월',
        },
        {
            producer: 'William Fèvre',
            name: 'Chablis Grand Cru',
            vintage: 2019,
            region: 'Bourgogne, France',
            purchaseDate: '2023년 5월',
        },
        {
            producer: 'Tenuta San Guido',
            name: 'Sassicaia',
            vintage: 2017,
            region: 'Tuscany, Italy',
            purchaseDate: '2022년 11월',
        },
        {
            producer: "Chateau d'Yquem",
            name: "Chateau d'Yquem",
            vintage: 2009,
            region: 'Bordeaux, France',
            purchaseDate: '2021년 8월',
        },
        {
            producer: 'Cloudy Bay',
            name: 'Cloudy Bay Sauvignon Blanc',
            vintage: 2021,
            region: 'Marlborough, New Zealand',
            purchaseDate: '2023년 4월',
        },
        {
            producer: 'La Rioja Alta',
            name: 'Rioja Gran Reserva',
            vintage: 2012,
            region: 'Rioja, Spain',
            purchaseDate: '2022년 7월',
        },
        {
            producer: 'Biondi-Santi',
            name: 'Brunello di Montalcino',
            vintage: 2015,
            region: 'Tuscany, Italy',
            purchaseDate: '2023년 2월',
        },
        {
            producer: 'Chateau Lafite Rothschild',
            name: 'Chateau Lafite Rothschild',
            vintage: 2014,
            region: 'Bordeaux, France',
            purchaseDate: '2024년 5월',
        },
        {
            producer: 'Royal Tokaji',
            name: 'Tokaji Aszú',
            vintage: 2011,
            region: 'Tokaj, Hungary',
            purchaseDate: '2022년 10월',
        },
        {
            producer: 'Moët & Chandon',
            name: 'Champagne Dom Pérignon',
            vintage: 2012,
            region: 'Champagne, France',
            purchaseDate: '2023년 1월',
        },
    ];

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (!query) {
            setFilteredWinelist([]);
            return;
        }

        const lower = query.toLowerCase();
        setFilteredWinelist(
            mockWinelist.filter(
                (g) =>
                    g.producer.toLowerCase().includes(lower) ||
                    g.name.toLowerCase().includes(lower) ||
                    g.region.toLowerCase().includes(lower) ||
                    g.vintage.toString().toLowerCase().includes(lower)
            )
        );
    };

    return (
        <div className={style.pageWrapper}>
            <div className={style.titleContainer}>
                <h2 className={style.title}>나의 셀러</h2>
                <div className={style.buttonContainer}>
                    <button className={style.importCSVbutton}>파일로 불러오기</button>
                    <button className={style.addButton}>새로운 와인 추가</button>
                </div>
            </div>
            <div className={style.searchBar}>
                <div className={style.searchInputWrapper}>
                    <Search className={style.searchIcon} size={20} />
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="내가 보유한 와인 검색"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className={style.searchInput}
                        />
                    </form>
                </div>
                <button className={style.filterButton}>필터</button>
            </div>
            <div className={style.contents}>
                {(searchQuery ? filteredWinelist : mockWinelist).map((item) => (
                    <WineCard {...item} />
                ))}
            </div>
        </div>
    );
}

export default MyCellar;
