import React from 'react';

interface BaseHeroProps {
  title: string;
  description: string;
  imgPath: string;
}

const BaseHero = ({ title, description, imgPath }: BaseHeroProps) => {
  return (
    <section>
      <h1>{ title }</h1>

      <p>{ description }</p>
    </section>
  );
};

export default BaseHero;
