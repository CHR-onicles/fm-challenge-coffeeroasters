import { BaseError } from '../../components/ui';

const NotFound = () => {
  return (
    <main>
      <BaseError error="Request failed with status code 404" />
    </main>
  );
};

export default NotFound;
