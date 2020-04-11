import { useState } from 'react';
import NavigationItems from './NavigationItems';
import FollowMeButton from './Button';
import FollowMenu from './FollowMenu';
export default function Navigation() {
  const [isExpanded, toggleExpansion] = useState(false);
  const [isFollowMenuExpanded, toggleFollowMenu] = useState(false);

  let followMenu = null;
  if (isFollowMenuExpanded) {
    followMenu = <FollowMenu />;
  }
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap .bg-gray-200 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-black font-mono px-2 py-0 text-4xl bg-black text-white text-xl tracking-tight">
            {'<Q>'}
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-black hover:border-black"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <NavigationItems />
          <div
            className={`${
              isFollowMenuExpanded
                ? 'transform -translate-x-2 inline-flex transition-transform duration-500 ease-in-out'
                : 'transform translate-x-2 inline-flex transition-transform duration-500 ease-in-out'
            }`}
          >
            <FollowMeButton
              clicked={() => toggleFollowMenu(!isFollowMenuExpanded)}
            />
          </div>
          {followMenu}
        </div>
      </nav>
    </div>
  );
}
