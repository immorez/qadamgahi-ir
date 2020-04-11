const followMenu = () => {
  return (
    <div>
      <ul className="inline-flex list-none ml-2 transition-transform duration-500 ease-in-out">
        <li className="mr-2">
          <a href="https://twitter.com/mqadamgahi">
            <img src="/assets/images/twitter.svg" className="w-5"></img>
          </a>
        </li>
        <li className="mr-2">
          <a href="https://instagram.com/mqadamgahiii">
            <img src="/assets/images/instagram.svg" className="w-5"></img>
          </a>
        </li>
        <li className="mr-2 font-light">
          <a href="https://t.me/qadamgahiii">
            <img src="/assets/images/telegram.svg" className="w-5"></img>
          </a>
        </li>
        <li className="mr-1">
          <a href="https://ir.linkedin.com/in/mohammadreza-qadamgahi-b2b6b3128">
            <img src="/assets/images/linkedin.svg" className="w-5"></img>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default followMenu;
