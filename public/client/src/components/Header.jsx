import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3 text-2xl'>
        <Link to='/'>
          <h1 className='font'>Home</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/faq'>
            <li>FAQ</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
