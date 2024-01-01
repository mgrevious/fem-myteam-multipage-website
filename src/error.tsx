import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div className="w-full">
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-8xl font-bold mb-8 text-secondary">Oops!</h1>
          <p className="text-3xl font-semibold mb-4">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-xl">
            <i>{isRouteErrorResponse(error) ? <> {error.statusText}</> : ''}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
