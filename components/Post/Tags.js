const tag = ({ tags }) => {
  let tag = '';
  if (tags) {
    tag = (
      <div className="flex flex-row w-auto">
        <p className="p-1 font-light">Tags:</p>
        {tags.map((tag) => (
          <p className="py-1 px-2 bg-transparent font-light rounded-full border border-blue-500 mx-1 text-blue-500">
            {tag}
          </p>
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col">{tag}</div>
    </>
  );
};

export default tag;
