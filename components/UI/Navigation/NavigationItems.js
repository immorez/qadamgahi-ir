import NavigationItem from './NavigationItem';

const navigationItems = () => {
  return (
    <div className="text-sm lg:flex-grow">
      <ul>
        <NavigationItem item="Home" linkTo="/" />
        <NavigationItem item="Resume" linkTo="/resume" />
        <NavigationItem item="About Me" linkTo="/about-me" />
      </ul>
    </div>
  );
};

export default navigationItems;
