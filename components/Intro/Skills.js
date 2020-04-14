import Tag from '../UI/Tag';

const skills = () => {
  return (
    <>
      <section className="px-4 pb-4 bg-gray-100 my-3">
        <div className="text-center p-2 mb-5 ">
          <h2 className="h2 text-gray-900 font-bold font-mono text-5xl">
            MY SKILLS
          </h2>
          <p className="-mt-1 font-thin">
            🛠️Three major skills which I am happy with them right now. 💻
          </p>
          <p className="font-mono">💖 + ☕ = {'</code>'}</p>
        </div>
        <section className="w-auto h-full flex md:flex-shrink-0 xl:flex-row md:flex-col sm:flex-col items-center mt-3">
          <div className="lg:w-1/3 md:w-full sm:w-full sm:w-full">
            <img
              src="assets/images/me.jpg"
              className="max-w-xs rounded-lg mx-auto mt-2 shadow-md "
            />
            <p className="italic mx-auto text-center mt-2">It's me!</p>
          </div>
          <div className="h-full lg:w-2/3 md:w-full sm:w-full">
            <ul className="p-2 mt-2">
              <li className="h-32 bg-gray-200 rounded-md m-2 shadow-sm hover:shadow-md hover:bg-gray-300">
                <div className="p-2 ml-2">
                  <h3 className="text-3xl font-mono font-semibold ml-2 text-blue-800">
                    FRONT-END DEVELOPMENT
                  </h3>
                  <p className="italic font-thin mb-2 mt-0 ml-2">
                    I know some magic spells with front-end cutting-edge
                    technologies.🔮
                  </p>
                  <Tag tag="Pure Javascript" />
                  <Tag tag="Typescript" />
                  <Tag tag="React" />
                  <Tag tag="HTML" />
                  <Tag tag="CSS" />
                  <Tag tag="LESS/SASS" />
                </div>
              </li>

              <li className="h-32 bg-gray-200 rounded-md m-2 hover:shadow-md hover:bg-gray-300">
                <div className="p-2 ml-2">
                  <h3 className="text-3xl font-mono font-semibold ml-2 text-blue-800">
                    BACK-END DEVELOPMENT
                  </h3>
                  <p className="italic font-thin mb-2 mt-0 ml-2">
                    Also I like to have adventures with back-end technologies.🕹️
                  </p>
                  <Tag tag="Python" />
                  <Tag tag="Django" />
                  <Tag tag="Flask" />
                  <Tag tag="REST API" />
                </div>
              </li>
              <li className="h-32 bg-gray-200 rounded-md m-2 hover:shadow-md hover:bg-gray-300">
                <div className="p-2 ml-2">
                  <h3 className="text-3xl font-mono font-semibold ml-2 text-blue-800">
                    DIGITAL MARKETING
                  </h3>
                  <p className="italic font-thin mb-2 mt-0 ml-2">
                    I am passionate about interacting with customers over online
                    platforms.🎩
                  </p>
                  <Tag tag="SEO" />
                  <Tag tag="Content Production" />
                  <Tag tag="Social Media" />
                  <Tag tag="eCommerce" />
                </div>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
};

export default skills;
