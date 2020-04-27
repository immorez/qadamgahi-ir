import NavigationItem from './NavigationItem';

const navigationItems = () => {
  return (
    <div className="text-sm lg:flex-grow">
      <ul>
        <NavigationItem item="Home" linkTo="/" />
        <NavigationItem item="Suggest" linkTo="/suggest" />
      </ul>
    </div>
  );
};

export default navigationItems;
