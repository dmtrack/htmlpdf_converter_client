import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <nav className='flex px-5 h-[50px] bg-gray-200 justify-between opacity-70 items-center shadow-md'>
            <Link to='/'>html to pdf converter</Link>
        </nav>
    );
}
