import React from 'react';
import './ProfilePage.scss';

// 아이콘들을 별도의 컴포넌트로 분리하면 더 좋지만, 여기서는 바로 사용합니다.
// 각 아이콘에 대한 SVG 경로 데이터
const icons = {
    home: 'M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z',
    explore:
        'M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z',
    gatherings:
        'M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z',
    messages:
        'M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,16V152h-28.7A15.86,15.86,0,0,0,168,156.69L148.69,176H107.31L88,156.69A15.86,15.86,0,0,0,76.69,152H48V48Zm0,160H48V168H76.69L96,187.31A15.86,15.86,0,0,0,107.31,192h41.38A15.86,15.86,0,0,0,160,187.31L179.31,168H208v40Z',
    profile:
        'M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z',
    star: 'M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z',
    starOutline:
        'M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z',
    wineGlass:
        'M184,20a12,12,0,1,1,12,12A12,12,0,0,1,184,20ZM164.12,73.23c7.26,44.25,4.35,75.76-8.66,93.66A39.94,39.94,0,0,1,128,183.42V232h16a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h16V183.42a40,40,0,0,1-27.46-16.53c-13-17.9-15.91-49.41-8.65-93.66A451,451,0,0,1,90.1,13.53,8,8,0,0,1,97.71,8H142.3a8,8,0,0,1,7.61,5.53A451,451,0,0,1,164.12,73.23ZM93.8,64h52.4c-3-15.58-6.72-29.81-9.78-40H103.59C100.53,34.19,96.83,48.42,93.8,64ZM149,80H91c-4.49,30-5.14,61.54,6.45,77.49C102.63,164.56,110,168,120,168s17.38-3.44,22.52-10.51C154.1,141.54,153.46,110,149,80Zm71-40a12,12,0,1,0,12,12A12,12,0,0,0,220,40ZM196,88a12,12,0,1,0,12,12A12,12,0,0,0,196,88Z',
    exchange:
        'M213.66,181.66l-32,32a8,8,0,0,1-11.32-11.32L188.69,184H48a8,8,0,0,1,0-16H188.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,213.66,181.66Zm-139.32-64a8,8,0,0,0,11.32-11.32L67.31,88H208a8,8,0,0,0,0-16H67.31L85.66,53.66A8,8,0,0,0,74.34,42.34l-32,32a8,8,0,0,0,0,11.32Z',
    review: 'M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z',
    like: 'M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z',
    dislike:
        'M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z',
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
    path: string;
}

const Icon: React.FC<IconProps> = ({ path, ...props }) => (
    <svg fill="currentColor" viewBox="0 0 256 256" {...props}>
        <path d={path}></path>
    </svg>
);

const ProfilePage: React.FC = () => {
    return (
        <div className="profile-page">
            <div className="layout-container">
                <main className="main-content">
                    <header className="main-content__header">
                        <h1>Activity History & Reputation</h1>
                    </header>

                    <section className="main-content__section">
                        <h2 className="section-title">Summary</h2>
                        <div className="summary-grid">
                            <div className="summary-card">
                                <p className="summary-card__value">12</p>
                                <p className="summary-card__label">Gatherings Attended</p>
                            </div>
                            <div className="summary-card">
                                <p className="summary-card__value">8</p>
                                <p className="summary-card__label">Gatherings Hosted</p>
                            </div>
                            <div className="summary-card">
                                <div className="summary-card__rating">
                                    <p className="summary-card__value">4.8</p>
                                    <Icon path={icons.star} className="summary-card__star-icon" />
                                </div>
                                <p className="summary-card__label">Average Rating</p>
                            </div>
                        </div>
                    </section>

                    <section className="main-content__section">
                        <h2 className="section-title">Detailed Activity Log</h2>
                        <div className="timeline">
                            <div className="timeline__item">
                                <div className="timeline__icon-wrapper">
                                    <Icon path={icons.wineGlass} className="timeline__icon" />
                                </div>
                                <div className="timeline__content">
                                    <p>Attended 'Summer Wine Tasting'</p>
                                    <span>July 15, 2023</span>
                                </div>
                            </div>
                            <div className="timeline__item">
                                <div className="timeline__icon-wrapper">
                                    <Icon path={icons.wineGlass} className="timeline__icon" />
                                </div>
                                <div className="timeline__content">
                                    <p>Hosted 'Italian Wine Night'</p>
                                    <span>June 20, 2023</span>
                                </div>
                            </div>
                            <div className="timeline__item">
                                <div className="timeline__icon-wrapper">
                                    <Icon path={icons.exchange} className="timeline__icon" />
                                </div>
                                <div className="timeline__content">
                                    <p>Participated in Wine Exchange</p>
                                    <span>May 5, 2023</span>
                                </div>
                            </div>
                            <div className="timeline__item">
                                <div className="timeline__icon-wrapper">
                                    <Icon path={icons.star} className="timeline__icon" />
                                </div>
                                <div className="timeline__content">
                                    <p>Received Rating: 5 stars</p>
                                    <span>April 12, 2023</span>
                                </div>
                            </div>
                            <div className="timeline__item">
                                <div className="timeline__icon-wrapper">
                                    <Icon path={icons.review} className="timeline__icon" />
                                </div>
                                <div className="timeline__content timeline__content--last">
                                    <p>Left Review for 'Summer Wine Tasting'</p>
                                    <span>March 28, 2023</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="main-content__section">
                        <h2 className="section-title">Reviews & Ratings</h2>
                        <div className="reviews-container">
                            <div className="review-card">
                                <div className="review-card__header">
                                    <div className="review-card__avatar"></div>
                                    <div className="review-card__author-info">
                                        <p>Ethan Carter</p>
                                        <span>April 12, 2023</span>
                                    </div>
                                </div>
                                <div className="review-card__rating">
                                    {[...Array(5)].map((_, i) => (
                                        <Icon key={i} path={icons.star} />
                                    ))}
                                </div>
                                <p className="review-card__text">
                                    Sophia's gathering was fantastic! The wine selection was
                                    excellent, and the atmosphere was very welcoming. I had a great
                                    time and met some wonderful people.
                                </p>
                                <div className="review-card__actions">
                                    <button>
                                        <Icon path={icons.like} />
                                        <span>5</span>
                                    </button>
                                    <button>
                                        <Icon path={icons.dislike} />
                                        <span>1</span>
                                    </button>
                                </div>
                            </div>
                            <div className="review-card">
                                <div className="review-card__header">
                                    <div className="review-card__avatar"></div>
                                    <div className="review-card__author-info">
                                        <p>Olivia Harper</p>
                                        <span>March 28, 2023</span>
                                    </div>
                                </div>
                                <div className="review-card__rating">
                                    {[...Array(4)].map((_, i) => (
                                        <Icon key={i} path={icons.star} />
                                    ))}
                                    <Icon
                                        path={icons.starOutline}
                                        className="review-card__rating-icon--inactive"
                                    />
                                </div>
                                <p className="review-card__text">
                                    The wine exchange was well-organized, and I discovered some new
                                    wines. Sophia was very knowledgeable and helpful throughout the
                                    process.
                                </p>
                                <div className="review-card__actions">
                                    <button>
                                        <Icon path={icons.like} />
                                        <span>3</span>
                                    </button>
                                    <button>
                                        <Icon path={icons.dislike} />
                                        <span>0</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ProfilePage;
