import { coffeeTypes } from '../../../data/coffee-types';

const OurCollection = () => {
  return (
    <section>
      <div className="container">
        <h2>Our Collection</h2>
        
        <ul>
          {
            coffeeTypes.map(coffeeType => (
              <li key={ coffeeType.name }>
                <div>
                  <img src={ coffeeType.imagePath } alt={ coffeeType.name } />

                  <h3>{ coffeeType.name }</h3>

                  <p>{ coffeeType.description }</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default OurCollection;
