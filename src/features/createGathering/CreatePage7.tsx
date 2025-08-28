import { useNavigate } from 'react-router-dom';
import style from './CreatePage.module.scss';
import { useEffect, useRef } from 'react';
import buttonStyle from '../../components/styles/button.module.scss';

function CreatePage7() {
    const navigate = useNavigate();
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (el) {
            setTimeout(() => el.classList.add(style.fadein), 10);
        }
    }, []);

    const handleNextStep = () => {
        navigate('/create/pending');
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
                            <p>기본 정보</p>
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
                                className={style.formInput__deposit}
                            />
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
