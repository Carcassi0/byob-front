import { X } from 'lucide-react';
import style from './DepositInfoModal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

interface DepositInfoModalProps {
    price: number;
    isOpen: boolean;
    onClose: () => void;
}

function DepositInfoModal({ isOpen, onClose, price }: DepositInfoModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className={style.overlay}>
            <dialog className={style.dialog} open>
                <div className={style.header}>
                    <h2 className={style.title}>보증금 정책</h2>
                    <X className={style.closeButton} onClick={onClose} />
                </div>
                <div className={style.content}>
                    <p className={style.content__text}>
                        본 모임은 와인 모임 불참을 방지하기 위해{' '}
                        <strong>{price.toLocaleString()}원의 보증금</strong>이 부과됩니다. 보증금은
                        모임에 정상적으로 참석하신 경우 전액 환불되며, 무단 불참 시 환불되지
                        않습니다. 자세한 내용이나 문의사항은 고객센터로 연락해주시기 바랍니다.
                    </p>
                </div>
            </dialog>
        </div>,
        document.body
    );
}

export default DepositInfoModal;
