const Button = ({ clicked, isOpen }) => {
  return (
    <div>
      <button
        onClick={clicked}
        href="#"
        className={` ${
          isOpen ? 'translate-x-10' : ''
        } inline-block text-sm px-4 py-2 leading-none border rounded text-gray-700 border-gray-700 hover:border-black hover:text-black hover:bg-white mt-4 lg:mt-0`}
      >
        Follow Me
      </button>
    </div>
  );
};

export default Button;
