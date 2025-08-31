import { useNavigate } from 'react-router-dom';
import style from './CreatePage.module.scss';
import { useEffect, useRef, useState } from 'react';
import buttonStyle from '../../components/styles/button.module.scss';
import useGateringStore from '../../store/gatheringStore';

interface attendButton {
    label: string;
    data: number;
}
function CreatePage2() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState(0);
    const { setSize } = useGateringStore();
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
        setSize(inputValue);
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
                            <form>
                                <button
                                    type="button"
                                    className={style.formButton}
                                    value={item.label}
                                    onClick={() => setInputValue(item.data)}>
                                    {item.label}
                                </button>
                            </form>
                        ))}
                        <form>
                            <button type="button" className={style.formButton}>
                                커스텀
                            </button>
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

export default CreatePage2;
