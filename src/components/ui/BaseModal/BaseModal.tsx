import { ReactNode, useEffect, useRef } from 'react';

import styles from './BaseModal.module.scss';

interface IBaseModalProps {
  title: string;
  onDismiss?: () => void;
  children: ReactNode;
}

const BaseModal = ({ title, onDismiss, children }: IBaseModalProps) => {
  const modalCloseBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const modalCloseBtn = modalCloseBtnRef.current;
    
    modalCloseBtn?.focus()
    document.body.classList.add('no-scrolling');
    
    return () => {
      modalCloseBtn?.blur();
      document.body.classList.remove('no-scrolling');
    }
  }, []);

  return (
    <div className={ styles.modal } role="dialog">
      <div
        data-testid="modal-backdrop"
        className={ styles['modal__backdrop'] } 
        onClick={ onDismiss }
      ></div>

      <div className={ styles['modal__container'] } tabIndex={ 0 }>
        <header className={ styles['modal__header'] }>
          <h2>{ title }</h2>

          <button
            type="button"
            className="btn"
            data-variant="burger"
            onClick={ onDismiss }
            ref={ modalCloseBtnRef }
          >
            <span className="sr-only">Close Modal</span>
          </button>
        </header>

        <div className={ styles['modal__body'] }>
          { children }
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
