import NavigationItem from './NavigationItem';

const navigationItems = () => {
  return (
    <div className="text-sm lg:flex-grow">
      <ul>
        <NavigationItem item="Home" />
        <NavigationItem item="Resume" />
        <NavigationItem item="About Me" />
      </ul>
    </div>
  );
};

export default navigationItems;
