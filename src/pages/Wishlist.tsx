import style from './styles/Wishlist.module.scss';
import React, { useRef } from 'react';

function Wishlist() {
    const cardRailRef = useRef<HTMLDivElement>(null);
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: React.MouseEvent) => {
        isDown = true;
        startX = e.pageX - (cardRailRef.current?.offsetLeft ?? 0);
        scrollLeft = cardRailRef.current?.scrollLeft ?? 0;
        document.body.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        isDown = false;
        document.body.style.cursor = '';
    };

    const handleMouseUp = () => {
        isDown = false;
        document.body.style.cursor = '';
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - (cardRailRef.current?.offsetLeft ?? 0);
        const walk = x - startX;
        if (cardRailRef.current) {
            cardRailRef.current.scrollLeft = scrollLeft - walk;
        }
    };
    return (
        <div className={style.pageWrapper}>
            <div className={style.wishlist}>
                <h2 className={style.title}>위시리스트</h2>
                {/* <div className={style.titleSection}>
                    <h2 className={style.subTitle}>나의 셀러</h2>
                    <button className={style.addButton}>셀러에 와인 추가</button>
                </div> */}
                {/* <h2 className={style.subTitle}>'위의종'님의 위시리스트</h2> */}

                <div className={style.wishlist__content}>
                    <div
                        className={style.wishlist__cardRail}
                        ref={cardRailRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}></div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
