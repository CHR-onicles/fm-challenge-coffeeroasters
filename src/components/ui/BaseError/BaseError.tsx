interface IBaseErrorProps {
  error: string;
  title?: string;
}

const BaseError = ({ error, title = 'Whoops!' }: IBaseErrorProps) => {
  return (
    <section>
      <div className="container">
        <div className="grid-cols">
          <div className="grid__item">
            <h2 className="text-align-center mb-s5">{ title }</h2>
            
            <p className="text-align-center">{ error }</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseError;
