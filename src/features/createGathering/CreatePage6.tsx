import { useNavigate } from 'react-router-dom';
import style from './CreatePage.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ImageUp } from 'lucide-react';
import buttonStyle from '../../components/styles/button.module.scss';

function CreatePage6() {
    const navigate = useNavigate();
    const [isDragging, setIsDragging] = useState(false);
    const [isError, setIsError] = useState<string | null>(null);
    const [imageName, setImageName] = useState('');
    // const [uploadImage, setUploadImage] = useState<File | null>(null);
    // const [isUploadSuccessed, setIsUploadSuccessed] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = wrapperRef.current;
        if (el) {
            setTimeout(() => el.classList.add(style.fadein), 10);
        }
    }, []);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = event.target.files?.[0];
        validateAndSetFile(selectedImage);
    };

    // 드래그앤드랍
    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        validateAndSetFile(droppedFile);
    }, []);

    const validateAndSetFile = async (selectedImage?: File) => {
        // try {
        //     const accessToken = useAuthStore.getState().accessToken;
        //     await fetchUserData(accessToken);
        // } catch (error) {
        //     console.log('회원 검증 중 에러 발생: ', error);
        //     setError('회원 가입 후 모임을 만들어보세요');
        //     return;
        // }
        setIsError(null);
        if (!selectedImage) return;

        const fileExtension = `.${selectedImage.name.split('.').pop()?.toLowerCase()}`;
        if (fileExtension !== '.jpeg' && fileExtension !== '.png') {
            setIsError('사진만 업로드 가능합니다.');
            return;
        }
        const maxFileSize = 5;
        const fileSize = selectedImage.size / (1024 * 1024);

        if (fileSize > maxFileSize) {
            setIsError('파일 크기는 5MB 이하여야 합니다.');
            return;
        }
        // setUploadImage(selectedImage);
        setImageName(selectedImage.name);
    };

    const handleUploadButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleNextStep = () => {
        navigate('/create/7');
    };
    const handlePrevStep = () => {
        navigate('/create/5');
    };
    const handleCancel = () => {
        navigate('/main/dashboard');
    };
    return (
        <div ref={wrapperRef} className={style.wrapper}>
            <div className={style.container}>
                <h1 className={style.title}>커버 이미지를 업로드해주세요</h1>
                <div className={style.contents}>
                    <div className={style.progressContainer}>
                        <div className={style.progressText}>
                            <p>Step 6 of 7</p>
                            <p>기본 정보</p>
                        </div>
                        <div className={style.progressBar__step6}></div>
                    </div>

                    <div className={style.formContainer}>
                        <input
                            type="file"
                            className={style.hiddenInput}
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            accept=".jpeg .png"
                        />
                        <div
                            className={`${style.formInput__image} ${
                                isDragging ? style.dragging : ''
                            } ${isError ? style.error : ''}`}
                            onClick={handleUploadButtonClick}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}>
                            <ImageUp />
                            {isError ? (
                                <p>{isError}</p>
                            ) : imageName ? (
                                <p>{imageName}</p>
                            ) : (
                                <p>커버사진을 업로드하세요</p>
                            )}
                        </div>
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

export default CreatePage6;

// 이미지 파일은 업로드 전에도 전역적으로 관리하여 사용자가 이전 단계로 가서 수정해도
// 사진이 삭제되지 않도록 설계
