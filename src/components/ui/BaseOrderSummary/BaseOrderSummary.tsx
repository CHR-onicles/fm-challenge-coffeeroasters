import { IFormData } from '../../../interfaces/form-data-interface';

interface IBaseOrderSummaryProps {
  formData: IFormData;
}

const BaseOrderSummary = ({ formData }: IBaseOrderSummaryProps) => {
  return (
    <div>
      <h3>Order Summary</h3>

      <p className="h4">
        “I drink my coffee { formData.preferences === 'Capsule' ? `using` : `as` } <span>{formData.preferences === '' ? `_____` : formData.preferences}</span>, 
        with a <span>{formData.beanType === '' ? `_____` : formData.beanType}</span> type of bean. <span>{formData.quantity === '' ? `_____` : formData.quantity}</span> {formData.preferences === 'Capsule' ? null : `ground ala `}{formData.preferences === 'Capsule' ? null : <span>{formData.grindOption === '' ? `_____` : formData.grindOption}</span>}, 
        sent to me <span>{formData.deliveries === '' ? `_____` : formData.deliveries}</span>.”
      </p>
    </div>
  );
};

export default BaseOrderSummary;
