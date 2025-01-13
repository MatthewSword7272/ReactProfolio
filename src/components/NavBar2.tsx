import {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const navlinks = [
    {title: 'Home2', path: '#home2'},
    {title: 'About', path: '#about'},
    {title: 'Portfolio', path: '#portfolio'},
    {title: 'Stack', path: '#stack'},
    {title: 'Contact', path: '#contact'},
]

interface NavBarProps {
    isInverse: boolean
    setIsInverse: (isInverse: boolean) => void
}

const NavBar2 = ({isInverse, setIsInverse}: NavBarProps) => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    return (
        <div className={'z-50 fixed top-[200px] flex justify-center w-full text-white font-bold'}>
            <div
                className={
                    'border transition-colors border-white/40 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center mx-auto'
                }
            >
                <ul className={'flex'}>
                    {navlinks.map((link, index) => (
                        <li
                            key={index}
                            className={`transition-all transform duration-300 ease-in-out hover:bg-primary  ${
                                index === 0 ? 'rounded-l-3xl' : index === navlinks.length - 1 ? 'rounded-r-3xl' : ''
                            }`}
                        >
                            <a
                                className={
                                    'block transform w-full h-full p-4 px-8 hover:skew-x-12 transition-transform duration-300 ease-in-out'
                                }
                                href={link.path}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                    {/* {index < navlinks.length - 1 && <div className="h-13 w-px bg-gray-300/50"></div>} */}
                    {/* {index < navlinks.length - 1 && <div className={'border-r border-gray-500 h-6'}></div>} */}
                    {/* Remove when done with Inverse */}
                    <li className={'border-r border-white h-6'}></li>
                    <li>
                        <button className={'bg-white text-black'} onClick={() => setIsInverse(!isInverse)}>
                            Switch
                        </button>
                    </li>
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

export default NavBar2
