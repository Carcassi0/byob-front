import { useNavigate } from 'react-router-dom';
import style from './CreatePage.module.scss';
import { useEffect, useRef, useState } from 'react';
import buttonStyle from '../../components/styles/button.module.scss';
import useGateringStore from '../../store/gatheringStore';

function CreatePage4() {
    const navigate = useNavigate();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState('');
    const { setDate } = useGateringStore();

    useEffect(() => {
        const el = wrapperRef.current;
        if (el) {
            setTimeout(() => el.classList.add(style.fadein), 10);
        }
    }, []);

    const handleNextStep = () => {
        setDate(inputValue);
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
                        </div>
                        <div className={style.progressBar__step4}></div>
                    </div>

                    <div className={style.searchLocation}>
                        <form>
                            <input
                                type="date"
                                className={style.formInput__date}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
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
