import { useState, useRef, FormEvent } from 'react';

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
}

const Order = ({ orderOptions }: IOrderProps) => {
  const [ quickLinks, setQuickLinks ] = useState<IQuickLink[]>(
    orderOptions.map((orderOption, index) => ({
      id: orderOption.id,
      slug: orderOption.slug,
      label: orderOption.quickLink,
      isActive: index === 0 ? true : false
    }))
  );

  const [ formData, setFormData ] = useState<IFormData>({
    preferences: '',
    beanType: '',
    quantity: '',
    grindOption: '',
    deliveries: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleMarkAsActive = (slug: string) => {
    setQuickLinks((quickLinks) => {
      const updatedQuickLinks = quickLinks.map(quicklink => ({
        ...quicklink,
        isActive: quicklink.slug === slug ? !quicklink.isActive : false
      }));


      return updatedQuickLinks;
    });
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;

    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData };

      updatedFormData[input.name as keyof IFormData] = input.value;

      return updatedFormData;
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    const data = new FormData(formRef.current);

    for (const pair of data.entries()) {
      console.log('handleSubmit - data: ', `{ ${pair[0]}: ${pair[1]} }`);
    }
  };

  const handleConfirmCheckout = () => {
    console.log('handleConfirmCheckout called');
  };

  return (
    <section className={ styles.order }>
      <div className="container">
        <div className={ styles['order__content'] }>
          <div className="grid-cols">
            <div className={ `${styles['order__col-left']} | grid__items grid__item--span-lg-3` }>
              <ul className={ styles['order__link-list'] }>
                {
                  quickLinks.map(quickLink => (
                    <li className={ styles['order__link-list-item'] } key={ quickLink.id }>
                      <button
                        type="button"
                        className={ `${styles['order__link-list-btn']} ${quickLink.isActive ? `${styles['active']}` : ''} | btn` }
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
              <form className={ styles['order__form'] } ref={ formRef } onSubmit={ handleSubmit }>
                {
                  orderOptions.map((orderOption, index) => (
                    <BaseAccordion
                      key={ orderOption.id }
                      id={ orderOption.slug }
                      initialState={ quickLinks[index].isActive }
                      label={ orderOption.title }
                      onMarkAsActive={ handleMarkAsActive }
                    >
                      <div className={ `row | ${styles['order__form-group']}` }>
                        {
                          orderOption.options.map(option => (
                            <BaseRadio
                              key={ option.id }
                              id={ option.id }
                              value={ option.title }
                              name={ orderOption.slug }
                              label={ option.title }
                              description={ option.description }
                              onHandleChange={ handleChange }
                            />
                          ))
                        }
                      </div>
                    </BaseAccordion>
                  ))
                }

                <BaseOrderSummary formData={ formData } />

                <button type="submit" className={ `${styles['order__btn-submit']} | btn` }>Create my plan!</button>
              </form>

              <BaseModal title="Order Summary">
                <BaseOrderSummary formData={ formData } variant="light" />
                
                <button type="button" className="btn" onClick={ handleConfirmCheckout }>Checkout</button>
              </BaseModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
