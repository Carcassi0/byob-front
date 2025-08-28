import { useNavigate } from 'react-router-dom';
import style from './CreatePage.module.scss';
import buttonStyle from '../../components/styles/button.module.scss';
import { useEffect, useRef } from 'react';

function CreatePage1() {
    const navigate = useNavigate();
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (el) {
            // 다음 tick에 fadein 클래스 추가
            setTimeout(() => el.classList.add(style.fadein), 10);
        }
    }, []);

    const handleNextStep = () => {
        navigate('/create/2');
    };

    const handleCancel = () => {
        navigate('/main/dashboard');
    };
    return (
        <div ref={wrapperRef} className={style.wrapper}>
            <div className={style.container}>
                <h1 className={style.title}>이 모임을 뭐라고 부를까요?</h1>
                <div className={style.contents}>
                    <div className={style.progressContainer}>
                        <div className={style.progressText}>
                            <p>Step 1 of 7</p>
                        </div>
                        <div className={style.progressBar__step1}></div>
                    </div>
                    <div className={style.formContainer}>
                        <form method="post">
                            <input
                                className={style.formInput}
                                placeholder="모임 이름을 입력하세요"></input>
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
                        <button className={buttonStyle.nextButton} onClick={handleNextStep}>
                            다음
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePage1;
