import InterestItem from './InterestItem';
const interests = () => {
  return (
    <>
      <div className="text-center p-2 mb-5">
        <h2 className="h2 text-gray-900 font-bold font-mono text-5xl">
          MY INTERESTS
        </h2>
        <p className="-mt-1 font-thin">🎶 I'll be there for you... 🎶</p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <InterestItem
          icon={'assets/images/computer-desktop.svg'}
          head={'WEB DEVELOPMENT'}
          body={
            "Website development has been one of my main favorite things. When I was a little boy, I was curious about how websites are working and how they're made."
          }
        />
        <InterestItem
          icon={'assets/images/digital-marketing.svg'}
          head={'DIGITAL MARKETING'}
          body={"I make customers out of audiences for businesses. That's it."}
        />
        <InterestItem
          icon={'assets/images/blockchain.svg'}
          head={'BLOCKCHAIN'}
          body={
            'I know somethings about blokchain & cryptocurrencies. The more I seek for new things about blockchain technologies, the more I am eager to dive into it.'
          }
        />
        <InterestItem
          icon={'assets/images/leadership.svg'}
          head={'STARTUP LEADERSHIP'}
          body={
            "I love to share my ideas with a group of people. Then we make it done together! I'm an ENTJ."
          }
        />
        <InterestItem
          icon={'assets/images/data-analytics.svg'}
          head={'DATA ANALYSIS'}
          body={
            "I'm interested in exploring data and visualizing them in order to discover useful information."
          }
        />
        <InterestItem
          icon={'assets/images/book.svg'}
          head={'LEARNING'}
          body={
            'As a person who loves to learn things by himself, I always try to fulfill myself with knowledge about things that I love.'
          }
        />
      </section>
    </>
  );
};

export default interests;
