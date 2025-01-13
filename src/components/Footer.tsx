import {AiFillFacebook, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const contact = {
    phone: '0417 924 945',
    email: 'mcatalfamo5@gmail.com',
    name: 'Matthew<br/>Catalfamo',
}

const Footer = () => {
    return (
        <footer className={'py-8'} id="contact">
            <div className={'max-w-[75rem] px-4 mx-auto'}>
                <div className={'flex items-center justify-between flex-col md:flex-row'}>
                    <div className={''}>
                        <h2 className={'md:text-7xl text-4xl font-bold mb-10 text-white/50'}>
                            Get in <span className={'text-gray-400'}>touch</span>
                        </h2>
                        <a
                            className={'md:text-4xl text-2xl font-semibold text-white underline decoration-gray-400 decoration-2'}
                            href={`mailto:${contact.email}`}
                        >
                            {contact.email}
                        </a>
                    </div>
                    <div className={'text-white/50 mt-12'}>
                        <div className={'mb-8'}>
                            <p className={'text-lg mb-1'}>Phone</p>
                            <a
                                href={`tel:${contact.phone}`}
                                className={
                                    'text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300'
                                }
                            >
                                {contact.phone}
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        'relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'
                    }
                >
                    <p className={'text-gray-200 caption-bottom lg:block'}>
                        @{new Date().getFullYear()} Matthew Catalfamo. All rights reserved.
                    </p>
                    <ul className={'flex gap-5 flex-wrap'}>
                        <a
                            href={'https://www.facebook.com/profile.php?id=100020409016299'}
                            aria-label={'Facebook'}
                            className={'text-gray-200 flex items-center justify-center w-10 h-10 rounded-full'}
                        >
                            <AiFillFacebook size={30} />
                        </a>
                        <a
                            href={'https://github.com/MatthewSword7272'}
                            aria-label={'GitHub'}
                            className={'text-gray-200 flex items-center justify-center w-10 h-10 rounded-full'}
                        >
                            <AiFillGithub size={30} />
                        </a>
                        <a
                            href={'https://www.linkedin.com/in/matthew-catalfamo-0a353a25a/'}
                            aria-label={'Linkedin'}
                            className={'text-gray-200 flex items-center justify-center w-10 h-10 rounded-full'}
                        >
                            <AiFillLinkedin size={30} />
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
