import { ReactNode, Fragment } from 'react';

import styles from './BaseModal.module.scss';

interface IBaseModalProps {
  title: string;
  onConfirm?: () => void;
  children: ReactNode;
}

const BaseModal = ({ title, onConfirm, children }: IBaseModalProps) => {
  return (
    <Fragment>
      <div className={ styles['modal__backdrop'] }></div>
      <div className={ styles['modal__container'] }>
        <header>
          <h2>{ title }</h2>
        </header>

        <div>
          { children }
        </div>
      </div>
    </Fragment>
  );
};

export default BaseModal;
