import Link from 'next/link';

const navigationItem = ({ item }) => {
  return (
    <li className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4">
      <Link href="#responsive-header">
        <a>{item}</a>
      </Link>
    </li>
  );
};

export default navigationItem;
