import {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const navlinks = [
    {title: 'Home2', path: '#home2'},
    {title: 'About', path: '#about'},
    {title: 'Portfolio', path: '#portfolio'},
    {title: 'Stack', path: '#stack'},
    {title: 'Contact', path: '#contact'},
]

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    return (
        <div className={'z-50 fixed flex justify-center w-full text-white font-bold'}>
            <div
                className={
                    'border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto'
                }
            >
                <ul className={'flex p-2 space-x-8'}>
                    {navlinks.map((link, index) => (
                        <li
                            key={index}
                            className={'transform hover:skew-x-12 hover:text-white/50 transition-all duration-300 ease-in-out'}
                        >
                            <a href={link.path}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Mobile Nav Button */}
            <div
                className={'md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2'}
                onClick={toggleNav}
            >
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            {/* Mobile Nav Menu */}
            <div
                className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
                    nav ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <ul className={'flex flex-col items-center justify-center space-y-8 h-full'}>
                    {navlinks.map((link, index) => (
                        <li key={index} className={'text-5xl'}>
                            <a href={link.path} onClick={closeNav}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavBar
