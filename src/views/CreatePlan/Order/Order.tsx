import { BaseAccordion } from '../../../components/ui';
import { BaseRadio } from '../../../components/form';

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
              <form>
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
                <button type="submit" className="btn">Create my plan!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
