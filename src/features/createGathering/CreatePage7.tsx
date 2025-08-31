import { useNavigate } from 'react-router-dom';
import style from './CreatePage.module.scss';
import { useEffect, useRef, useState } from 'react';
import buttonStyle from '../../components/styles/button.module.scss';

function CreatePage7() {
    const navigate = useNavigate();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isAgreed, setIsAgreed] = useState(false);
    const [depositValue, setDepositValue] = useState(30000);

    useEffect(() => {
        const el = wrapperRef.current;
        if (el) {
            setTimeout(() => el.classList.add(style.fadein), 10);
        }
    }, []);

    const toggleAgree = () => {
        if (isAgreed) {
            setIsAgreed(false);
        } else setIsAgreed(true);
    };

    const handleNextStep = () => {
        if (isAgreed && depositValue > 30000) {
            navigate('/create/pending');
        } else return;
    };
    const handlePrevStep = () => {
        navigate('/create/6');
    };
    const handleCancel = () => {
        navigate('/main/dashboard');
    };

    return (
        <div ref={wrapperRef} className={style.wrapper}>
            <div className={style.container}>
                <h1 className={style.title}>보증금 설정 후 이용약관에 동의해주세요</h1>
                <div className={style.contents}>
                    <div className={style.progressContainer}>
                        <div className={style.progressText}>
                            <p>Step 7 of 7</p>
                        </div>
                        <div className={style.progressBar__step7}></div>
                    </div>

                    <div className={style.searchLocation}>
                        <form method="post">
                            <input
                                type="number"
                                placeholder="30,000"
                                max={1000000}
                                min={30000}
                                step={10000}
                                value={depositValue}
                                onChange={(e) => setDepositValue(Number(e.target.value))}
                                className={style.formInput__deposit}
                            />
                        </form>
                    </div>
                    <div className={style.termContainer}>
                        <p className={style.termContainer__text}>이용약관에 동의</p>
                        <button
                            className={`${style.termContainer__button} ${
                                isAgreed ? style.isActive : ''
                            }`}
                            onClick={toggleAgree}
                        />
                    </div>

                    <div className={style.pagingButtons}>
                        <button className={style.cancelButton} onClick={handleCancel}>
                            취소
                        </button>
                        <div className={style.buttonRail}>
                            <button className={buttonStyle.nextButton} onClick={handlePrevStep}>
                                이전
                            </button>
                            <button className={buttonStyle.nextButton} onClick={handleNextStep}>
                                만들기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePage7;
