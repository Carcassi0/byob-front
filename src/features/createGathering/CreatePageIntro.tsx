import { useNavigate } from 'react-router-dom';
import style from './CreatePageIntro.module.scss';
import { useEffect } from 'react';

function CreatePageIntro() {
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate('/create/1');
    };

    useEffect(() => {
        const timer = setTimeout(handleNextPage, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>모임을 시작해볼까요?</h1>
        </div>
    );
}

export default CreatePageIntro;
