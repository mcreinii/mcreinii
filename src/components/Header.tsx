import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Image
        src={
          'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
        }
        width={200}
        height={200}
        alt="Profile"
      />
      <ul>
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
