const followMenu = ({ show }) => {
  return (
    <div>
      <ul className="inline-flex list-none lg:ml-2 md:ml-2 sm:ml-0 transition-transform duration-500 ease-in-out">
        <li className="mr-2 transform hover:-translate-y-1 transition-transform duration-150 ease-in-out hover:bg-blue-400">
          <a href="https://twitter.com/mqadamgahi">
            <img src="/assets/images/twitter.svg" className="w-5"></img>
          </a>
        </li>
        <li className="mr-2 transform hover:-translate-y-1 transition-transform duration-150 ease-in-out hover:bg-red-500">
          <a href="https://instagram.com/mqadamgahiii">
            <img src="/assets/images/instagram.svg" className="w-5"></img>
          </a>
        </li>
        <li className="mr-2 transform hover:-translate-y-1 transition-transform duration-150 ease-in-out hover:bg-blue-600">
          <a href="https://t.me/qadamgahiii">
            <img src="/assets/images/telegram.svg" className="w-5"></img>
          </a>
        </li>
        <li className="mr-1 transform hover:-translate-y-1 transition-transform duration-150 ease-in-out hover:bg-blue-700">
          <a href="https://ir.linkedin.com/in/mohammadreza-qadamgahi-b2b6b3128">
            <img src="/assets/images/linkedin.svg" className="w-5"></img>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default followMenu;
