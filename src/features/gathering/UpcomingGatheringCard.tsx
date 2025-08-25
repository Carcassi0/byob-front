import { useState } from 'react';
import type { wineinfo } from '../../types/wineinfo';
import SimpleWinelistCard from './SimpleWinelistCard';
import style from './UpcomingGatheringCard.module.scss';
import DepositInfoModal from '../deposit/DepositInfoModal';

function UpcomingGatheringCard() {
    const mockWinelist: wineinfo[] = [
        {
            producer: 'Claude Dugat',
            name: 'Gevrey Chambertin',
            vintage: 2017,
            region: 'Bourgogne, France',
            purchaseDate: '2025년 2월',
        },

        {
            producer: 'Giacomo Conterno',
            name: 'Barolo Riserva',
            vintage: 2013,
            region: 'Piedmont, Italy',
            purchaseDate: '2022년 9월',
        },

        {
            producer: 'William Fèvre',
            name: 'Chablis Grand Cru',
            vintage: 2019,
            region: 'Bourgogne, France',
            purchaseDate: '2023년 5월',
        },
        {
            producer: "Chateau d'Yquem",
            name: "Chateau d'Yquem",
            vintage: 2009,
            region: 'Bordeaux, France',
            purchaseDate: '2021년 8월',
        },
    ];
    const [extend, setExtend] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleExtend = () => {
        setExtend(!extend);
    };

    return (
        <>
            <DepositInfoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                price={100000}
            />
            <div className={`${style.container} ${extend ? '' : style.extended}`}>
                <div className={style.titleContainer}>
                    <div className={style.titleSection}>
                        <h3 className={style.title}>Emidio Pepe 테이스팅</h3>
                        <p className={style.subTitle}>2025년 8월 31일 - Hosted by 위의종</p>
                    </div>
                    {/* 여기에 유저 아바타 사진 가로로 겹쳐 놓은 것 추가 */}
                    <button className={style.viewDetailButton} onClick={handleExtend}>
                        {extend ? '접기' : '더 보기'}
                    </button>
                </div>
                <div className={`${style.extendContainer} ${extend ? '' : style.hidden}`}>
                    <h3 className={style.title}>와인 리스트</h3>
                    <div className={style.winelistContainer}>
                        {mockWinelist.map((item) => (
                            <SimpleWinelistCard {...item} />
                        ))}
                    </div>
                    <h3 className={style.title}>지불 금액</h3>
                    <div className={style.depositContainer}>
                        <div className={style.depositSection}>
                            <p className={style.depositSection__number}>100,000원</p>
                            <p className={style.depositSection__text}>| 보증금</p>
                        </div>
                        <button className={style.textButton} onClick={() => setIsModalOpen(true)}>
                            보증금 정책
                        </button>
                    </div>
                    <div className={style.action}>
                        <button className={style.askButton}>호스트에게 문의</button>
                        <button className={style.cancelButton}>취소하기</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpcomingGatheringCard;
