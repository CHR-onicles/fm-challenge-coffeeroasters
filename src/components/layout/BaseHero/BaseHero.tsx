interface BaseHeroProps {
  title: string;
  description: string;
  imgPath: string;
}

const BaseHero = ({ title, description, imgPath }: BaseHeroProps) => {
  return (
    <section>
      <div className="container">
        <h1>{ title }</h1>

        <p>{ description }</p>
      </div>
    </section>
  );
};

export default BaseHero;
