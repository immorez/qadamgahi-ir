import Container from '../Container/Container';
import cn from 'classnames';

const alert = ({ preview }) => {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              <div
                class="p-2 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span class="flex rounded-full bg-green-600 uppercase px-2 py-1 text-xs font-bold mr-3">
                  New
                </span>
                <p>The source code for this blog is </p>
                <a
                  href={`https://github.com/qadamgahiii/qadamgahiii-ir`}
                  className="underline hover:text-success duration-200 transition-colors ml-1"
                >
                  available on GitHub
                </a>
                .
                <svg
                  class="fill-current opacity-75 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default alert;
