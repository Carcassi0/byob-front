import { useNavigate } from 'react-router-dom';
import style from './CreatePage.module.scss';

function CreatePage5() {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/create/6');
    };
    const handlePrevStep = () => {
        navigate('/create/4');
    };
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1 className={style.title}>언제 만날까요?</h1>
                <div className={style.contents}>
                    <div className={style.progressContainer}>
                        <div className={style.progressText}>
                            <p>Step 5 of 7</p>
                            <p>기본 정보</p>
                        </div>
                        <div className={style.progressBar__step5}></div>
                    </div>

                    <div className={style.searchLocation}>
                        <form method="post">
                            <textarea
                                className={style.formInput__detail}
                                placeholder={'모임을 설명해주세요'}
                            />
                        </form>
                    </div>
                    <div className={style.buttonRail}>
                        <button className={style.nextButton} onClick={handlePrevStep}>
                            이전 단계
                        </button>
                        <button className={style.nextButton} onClick={handleNextStep}>
                            다음 단계
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePage5;
