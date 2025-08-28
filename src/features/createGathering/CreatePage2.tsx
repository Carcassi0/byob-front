import { useNavigate } from 'react-router-dom';
import style from './CreatePage.module.scss';
import { useEffect, useRef } from 'react';
import buttonStyle from '../../components/styles/button.module.scss';

interface attendButton {
    label: string;
    data: number;
}
function CreatePage2() {
    const navigate = useNavigate();
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (el) {
            setTimeout(() => el.classList.add(style.fadein), 10);
        }
    }, []);

    const buttonList: attendButton[] = [
        { label: '2명', data: 2 },
        { label: '3명', data: 3 },
        { label: '4명', data: 4 },
        { label: '5명', data: 5 },
        { label: '6명', data: 6 },
    ];

    const handleCancel = () => {
        navigate('/main/dashboard');
    };

    const handleNextStep = () => {
        navigate('/create/3');
    };
    const handlePrevStep = () => {
        navigate('/create/1');
    };

    return (
        <div ref={wrapperRef} className={style.wrapper}>
            <div className={style.container}>
                <h1 className={style.title}>모임 규모를 정해주세요</h1>
                <div className={style.contents}>
                    <div className={style.progressContainer}>
                        <div className={style.progressText}>
                            <p>Step 2 of 7</p>
                        </div>
                        <div className={style.progressBar__step2}></div>
                    </div>

                    <div className={style.formButtonRail}>
                        {buttonList.map((item) => (
                            <form method="post">
                                <input
                                    className={style.formButton}
                                    value={item.label}
                                    type="submit"
                                />
                            </form>
                        ))}
                        <form method="post">
                            <input className={style.formButton} value={'커스텀'} type="submit" />
                        </form>
                    </div>

                    {/* <div className={style.formContainer}>
                        <p className={style.formTitle}>설명</p>
                        <form method="post">
                            <input className={style.formInput}></input>
                        </form>
                    </div>
                    <div className={style.formContainer__row}>
                        <div className={style.formContainer}>
                            <p className={style.formTitle}>시간</p>
                            <form method="post">
                                <input type="date" className={style.formInput}></input>
                            </form>
                        </div>
                        <div className={style.formContainer}>
                            <p className={style.formTitle}>설명</p>
                            <form method="post">
                                <input className={style.formInput}></input>
                            </form>
                        </div>
                    </div>
                    <div className={style.searchLocation}>
                        <p className={style.formTitle}>위치</p>
                        <form method="get">
                            <input className={style.formInput}></input>
                        </form>
                    </div> */}
                    <div className={style.pagingButtons}>
                        <button className={style.cancelButton} onClick={handleCancel}>
                            취소
                        </button>
                        <div className={style.buttonRail}>
                            <button className={buttonStyle.nextButton} onClick={handlePrevStep}>
                                이전
                            </button>
                            <button className={buttonStyle.nextButton} onClick={handleNextStep}>
                                다음
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePage2;
