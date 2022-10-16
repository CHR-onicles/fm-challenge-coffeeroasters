import styles from './TheCopyright.module.scss';

const TheCopyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className={ `${styles.copyright} | row` }>
      <p className="text-size-s-1">&copy; { year }</p>

      <p className="text-size-s-1">Coded by <a href="https://github.com/christopher-adolphe/fm-challenge-coffeeroasters" aria-label="Christopher's github repository for the Coffeeroasters challenge on Frontend Mentor" target="_blank" rel="noreferrer">Christopher Adolphe</a></p>
    </div>
  );
};

export default TheCopyright;
