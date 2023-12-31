import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div className="w-full">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>
              {isRouteErrorResponse(error) ? (
                <> {error.statusText}</>
              ) : (
                'Unknown error message'
              )}
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
