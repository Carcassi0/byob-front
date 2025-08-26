import { useNavigate } from 'react-router-dom';
import style from './CreatePage.module.scss';

function CreatePage1() {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/create/2');
    };
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1 className={style.title}>이 모임을 뭐라고 부를까요?</h1>
                <div className={style.contents}>
                    <div className={style.progressContainer}>
                        <div className={style.progressText}>
                            <p>Step 1 of 7</p>
                            <p>기본 정보</p>
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
                        <p className={style.formTitle}>커버 사진</p>
                        <button className={style.formInput__image}>
                            <ImageUp />
                            <p>커버사진을 업로드하세요</p>
                        </button>
                    </div> */}
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
                    <button className={style.nextButton} onClick={handleNextStep}>
                        다음 단계
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreatePage1;
