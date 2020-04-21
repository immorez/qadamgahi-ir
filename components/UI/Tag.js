const tag = ({ tag }) => {
  return (
    <span className="inline-block bg-transparent border border-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 mr-2 shadow-sm hover:bg-blue-800 hover:text-white m-1">
      {tag}
    </span>
  );
};

export default tag;
