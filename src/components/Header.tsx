import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="shadow-gray-500 shadow-md h-15 flex ">
      <Image
        src={
          'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
        }
        width={40}
        height={40}
        alt="Profile"
      />
      <ul className="self-center-safe">
        <li>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/skills'}>Skills</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
