import { useNavigate } from 'react-router-dom';
import style from './CreatePage.module.scss';
import { useEffect, useRef } from 'react';

function CreatePage4() {
    const navigate = useNavigate();
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (el) {
            setTimeout(() => el.classList.add(style.fadein), 10);
        }
    }, []);

    const handleNextStep = () => {
        navigate('/create/5');
    };
    const handlePrevStep = () => {
        navigate('/create/3');
    };
    const handleCancel = () => {
        navigate('/main/dashboard');
    };
    return (
        <div ref={wrapperRef} className={style.wrapper}>
            <div className={style.container}>
                <h1 className={style.title}>언제 모일까요?</h1>
                <div className={style.contents}>
                    <div className={style.progressContainer}>
                        <div className={style.progressText}>
                            <p>Step 4 of 7</p>
                            <p>기본 정보</p>
                        </div>
                        <div className={style.progressBar__step4}></div>
                    </div>

                    <div className={style.searchLocation}>
                        <form method="post">
                            <textarea
                                className={style.formInput__detail}
                                placeholder={'모임을 설명해주세요'}
                            />
                        </form>
                    </div>
                    <div className={style.pagingButtons}>
                        <button className={style.cancelButton} onClick={handleCancel}>
                            취소
                        </button>
                        <div className={style.buttonRail}>
                            <button className={style.nextButton} onClick={handlePrevStep}>
                                이전
                            </button>
                            <button className={style.nextButton} onClick={handleNextStep}>
                                다음
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePage4;
