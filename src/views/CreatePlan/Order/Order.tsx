import { useState, useEffect, useCallback, FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { BaseAccordion, BaseOrderSummary, BaseModal } from '../../../components/ui';
import { BaseRadio } from '../../../components/form';

import { IPlan } from '../../../interfaces/plan-interface';
import { IFormData } from '../../../interfaces/form-data-interface';

import styles from './Order.module.scss';

interface IOrderProps {
  orderOptions: IPlan[];
}

interface IQuickLink {
  id: string;
  slug: string;
  label: string;
  isActive: boolean;
  isDisabled: boolean;
}

const priceMap = new Map([
  ['250g', [7.2, 9.6, 12]],
  ['500g', [13, 17.5, 22]],
  ['1000g', [22, 32, 42]],
]);

const Order = ({ orderOptions }: IOrderProps) => {
  const [ quickLinks, setQuickLinks ] = useState<IQuickLink[]>(
    orderOptions.map((orderOption, index) => ({
      id: orderOption.id,
      slug: orderOption.slug,
      label: orderOption.quickLink,
      isActive: index === 0 ? true : false,
      isDisabled: false,
    }))
  );

  const [ formData, setFormData ] = useState<IFormData>({
    preferences: '',
    beanType: '',
    quantity: '',
    grindOption: '',
    deliveries: '',
  });

  const [ shipmentCost, setShipmentCost ] = useState<number>(0);

  const [ isModalVisible, setIsModalVisible ] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleMarkAsActive = (slug: string) => {
    const targetElem = document.getElementById(slug);

    setQuickLinks((quickLinks) => {
      const updatedQuickLinks = quickLinks.map(quickLink => ({
        ...quickLink,
        isActive: quickLink.slug === slug ? !quickLink.isActive : false,
      }));

      return updatedQuickLinks;
    });

    targetElem?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;

    setFormData((formData) => {
      const updatedFormData = { ...formData };
      const { name, value } = input;

      updatedFormData[name as keyof IFormData] = value;

      if (updatedFormData.preferences === 'Capsule') {
        updatedFormData.grindOption = '';
      }

      return updatedFormData;
    });
  };

  const handleDisableGrindOption = useCallback(() => {
    if (formData.preferences === 'Capsule') {
      setQuickLinks((quickLinks) => {
        const updatedQuickLinks = quickLinks.map(quickLink => ({
          ...quickLink,
          isDisabled: quickLink.slug === 'grindOption' ? true : false,
        }));
  
  
        return updatedQuickLinks;
      });
    } else {
      setQuickLinks((quickLinks) => {
        const updatedQuickLinks = quickLinks.map(quickLink => ({
          ...quickLink,
          isDisabled: false,
        }));
  
  
        return updatedQuickLinks;
      });
    }
  }, [formData]);

  const handleGetDeliveryPrice = (index: number): number => {
    let priceList;
    priceList = priceMap.get('250g');

    if (!formData.quantity.length && priceList) {
      return priceList[index];
    }

    priceList = priceMap.get(formData.quantity);

    if (priceList) {
      return priceList[index];
    }

    return 0;
  };

  const handleCalculateCost = () => {
    const { quantity, deliveries } = formData;
    const priceList = priceMap.get(quantity);
    let price = 0;
    let multiplier = 0;

    if (!priceList) {
      return;
    }

    switch (deliveries) {
      case 'Every week':
        price = priceList[0];
        multiplier = 4;
        break;

      case 'Every 2 weeks':
        price = priceList[1];
        multiplier = 2;
        break;

      case 'Every month':
        price = priceList[2];
        multiplier = 1;
        break;
    }

    setShipmentCost(price * multiplier);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    let isFormValid;

    if (formData.preferences === 'Filter' || formData.preferences === 'Espresso') {
      isFormValid = Object.values(formData).every(option => option !== '');
    } else {
      const capsulePreference = { ...formData };

      delete capsulePreference.grindOption;

      isFormValid = Object.values(capsulePreference).every(option => option !== '');
    }

    if (!isFormValid) {
      return;
    }

    setIsModalVisible(true);

    handleCalculateCost();
  };

  const handleDismissModal = () => {
    setIsModalVisible((prevIsModalVisible) => !prevIsModalVisible);
  };

  const handleConfirmCheckout = () => {
    navigate('/checkout');
  };

  useEffect(() => {
    handleDisableGrindOption();
  }, [handleDisableGrindOption]);

  return (
    <section className={ styles.order }>
      <div className="container">
        <div className={ styles['order__content'] }>
          <div className="grid-cols">
            <div className={ `grid__items grid__item--span-lg-3 | ${styles['order__col-left']}` }>
              <ul className={ styles['order__link-list'] }>
                {
                  quickLinks.map(quickLink => (
                    <li className={ styles['order__link-list-item'] } key={ quickLink.id }>
                      <button
                        type="button"
                        className={ `btn | ${styles['order__link-list-btn']} ${quickLink.isActive ? `${styles['active']}` : ''}` }
                        disabled={ quickLink.isDisabled }
                        onClick={ () => handleMarkAsActive(quickLink.slug) }
                      >
                        { quickLink.label }
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="grid__items grid__item--span-lg-8 grid__item--start-lg-5">
              <form className={ styles['order__form'] } onSubmit={ handleSubmit }>
                {
                  orderOptions.map((orderOption, index) => (
                    <BaseAccordion
                      key={ orderOption.id }
                      id={ orderOption.slug }
                      initialState={ quickLinks[index].isActive }
                      isDisabled={ quickLinks[index].isDisabled }
                      label={ orderOption.title }
                      onMarkAsActive={ handleMarkAsActive }
                    >
                      <div className={ `row | ${styles['order__form-group']}` }>
                        {
                          orderOption.options.map((option, index) => (
                            <BaseRadio
                              key={ option.id }
                              id={ option.id }
                              value={ option.title }
                              name={ orderOption.slug }
                              label={ option.title }
                              description={ orderOption.slug === 'deliveries' ? `$${handleGetDeliveryPrice(index).toFixed(2)} ${option.description}` : option.description }
                              onHandleChange={ handleChange }
                            />
                          ))
                        }
                      </div>
                    </BaseAccordion>
                  ))
                }

                <BaseOrderSummary formData={ formData } />

                <button type="submit" className={ `btn | ${styles['order__btn-submit']}` }>Create my plan!</button>
              </form>

              {
                isModalVisible ? (
                  createPortal(
                    <BaseModal title="Order Summary" onDismiss={ handleDismissModal }>
                      <BaseOrderSummary formData={ formData } variant="light" />
    
                      <p className={ styles['order__modal-text'] }>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.</p>
                      
                      <div className={ `row | ${styles['order__modal-action']}`}>
                        <h3>{ `$${shipmentCost?.toFixed(2)}` }/mo</h3>
    
                        <button type="button" className="btn" onClick={ handleConfirmCheckout }>
                          Checkout<span>&nbsp;-&nbsp;{ `$${shipmentCost?.toFixed(2)}` }/mo</span>
                        </button>
                      </div>
                    </BaseModal>,
                    document.getElementById('modal-root') as HTMLElement)
                ) : null
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
