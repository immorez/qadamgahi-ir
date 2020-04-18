import Container from '../Container/Container';
// import { EXAMPLE_PATH } from '../../lib/constants';

const footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h6 className="text-xl lg:text-lg font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Designed with ❤️ by Mohamamdreza
          </h6>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org"
              className="mx-3 font-bold hover:underline"
            >
              Made with Next.js
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default footer;
