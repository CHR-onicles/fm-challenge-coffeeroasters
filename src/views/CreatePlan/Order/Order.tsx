import { FormEvent, useRef } from 'react';

import { BaseAccordion } from '../../../components/ui';
import { BaseRadio } from '../../../components/form';

import { IPlan } from '../../../interfaces/plan-interface';

import styles from './Order.module.scss';

interface IOrderProps {
  orderOptions: IPlan[];
}

const Order = ({ orderOptions }: IOrderProps) => {
  const formRef = useRef<HTMLFormElement>(null);

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

  return (
    <section className={ styles.order }>
      <div className="container">
        <div className={ styles['order__content'] }>
          <div className="grid-cols">
            <div className="grid__items grid__item--span-lg-3">
              <ul className={ styles['order__link-list'] }>
                {
                  orderOptions.map(orderOption => (
                    <li className={ styles['order__link-list-item'] } key={ orderOption.id }>
                      <button type="button" className="btn">{ orderOption.quickLink }</button>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="grid__items grid__item--span-lg-8 grid__item--start-lg-5">
              <form className={ styles['order__form'] } ref={ formRef } onSubmit={ handleSubmit }>
                {
                  orderOptions.map(orderOption => (
                    <BaseAccordion
                      id={ orderOption.slug }
                      label={ orderOption.title }
                      key={ orderOption.slug }
                    >
                      <div className="row">
                        {
                          orderOption.options.map(option => (
                            <BaseRadio
                              key={ option.id }
                              id={ option.id }
                              value={ option.title }
                              name={ orderOption.slug }
                              label={ option.title }
                              description={ option.description }
                            />
                          ))
                        }
                      </div>
                    </BaseAccordion>
                  ))
                }

                <div className={ styles['order__summary'] }>
                  <h3>Order Summary</h3>

                  <p className="h4">{`“I drink my coffee using Capsules, with a _____ type of bean. _____ , sent to me _____.”`}</p>
                </div>

                <button type="submit" className={ `${styles['order__btn-submit']} | btn` }>Create my plan!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
