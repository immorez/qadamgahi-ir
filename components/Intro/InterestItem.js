const interestItem = ({ icon, head, body }) => {
  return (
    <div className="p-5 flex-row items-center flex-wrap bg-gray-100 shadow-sm transition-shadow duration-200 text-center rounded-lg hover:bg-gray-200 hover:shadow-md">
      <div className="block h-20">
        <img
          className="w-20 p-3 bg-gray-300 rounded-lg mx-auto block"
          src={icon}
        />
      </div>
      <h3 className="text-2xl font-mono font-semibold mt-2">{head}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default interestItem;
