import { BaseAccordion } from '../../../components/ui';

import { IPlan } from '../../../interfaces/plan-interface';

interface IOrderProps {
  orderOptions: IPlan[];
}

const Order = ({ orderOptions }: IOrderProps) => {
  return (
    <section>
      <div className="container">
        <div>
          <div className="grid-cols">
            <div className="grid__items grid__item--span-lg-3">
              <ul>
                {
                  orderOptions.map(orderOption => (
                    <li key={ orderOption.id }>{ orderOption.quickLink }</li>
                  ))
                }
              </ul>
            </div>

            <div className="grid__items grid__item--span-lg-8 grid__item--start-lg-5">
              {
                orderOptions.map(orderOption => (
                  <BaseAccordion
                    id={ orderOption.slug }
                    label={ orderOption.title }
                    key={ orderOption.slug }
                  >
                    <ul>
                      {
                        orderOption.options.map(option => (
                          <li key={ option.id }>
                            <h3>{ option.title }</h3>
                            <p>{ option.description }</p>
                          </li>
                        ))
                      }
                    </ul>
                  </BaseAccordion>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
