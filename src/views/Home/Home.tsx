import { TheHero } from '../../components/layout';

const Home = () => {
  return (
    <main>
      <TheHero />
      
      <h2>Home Component</h2>

      <div className="bg-dark-color-2" style={ { width: '400px', height: '400px', border: '1px solid #000000' } }>
        <p className="text-align-center | text-neutral-color-2">This is some dummy content</p>
      </div>
    </main>
  );
};

export default Home;
