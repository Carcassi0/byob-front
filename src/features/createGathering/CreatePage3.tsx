import { useNavigate } from 'react-router-dom';
import style from './CreatePage.module.scss';
import { useEffect, useRef } from 'react';
import buttonStyle from '../../components/styles/button.module.scss';

function CreatePage3() {
    const navigate = useNavigate();
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (el) {
            setTimeout(() => el.classList.add(style.fadein), 10);
        }
    }, []);

    const handleNextStep = () => {
        navigate('/create/4');
    };
    const handlePrevStep = () => {
        navigate('/create/2');
    };
    const handleCancel = () => {
        navigate('/main/dashboard');
    };

    return (
        <div ref={wrapperRef} className={style.wrapper}>
            <div className={style.container}>
                <h1 className={style.title}>어디서 만날까요?</h1>
                <div className={style.contents}>
                    <div className={style.progressContainer}>
                        <div className={style.progressText}>
                            <p>Step 3 of 7</p>
                        </div>
                        <div className={style.progressBar__step3}></div>
                    </div>

                    <div className={style.searchLocation}>
                        <form method="get">
                            <input className={style.formInput} placeholder={'위치를 검색'}></input>
                        </form>
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
                                다음
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePage3;
