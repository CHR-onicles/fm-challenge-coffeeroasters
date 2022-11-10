import { IFormData } from '../../../interfaces/form-data-interface';

import styles from './BaseOrderSummary.module.scss';

interface IBaseOrderSummaryProps {
  formData: IFormData;
  variant?: string;
}

const BaseOrderSummary = ({ formData, variant = 'default' }: IBaseOrderSummaryProps) => {
  return (
    <div className={ styles['order-summary'] } data-variant={ variant }>
      <h3>Order Summary</h3>

      <p data-testid="order-summary" className="h4">
        “I drink my coffee { formData.preferences === 'Capsule' ? `using` : `as` } <span>{formData.preferences === '' ? `_____` : formData.preferences}</span>, 
        with a <span>{formData.beanType === '' ? `_____` : formData.beanType}</span> type of bean. <span>{formData.quantity === '' ? `_____` : formData.quantity}</span>{formData.preferences === 'Capsule' ? null : ` ground ala `}{formData.preferences === 'Capsule' ? null : <span>{formData.grindOption === '' ? `_____` : formData.grindOption}</span>}, 
        sent to me <span>{formData.deliveries === '' ? `_____` : formData.deliveries}</span>.”
      </p>
    </div>
  );
};

export default BaseOrderSummary;
