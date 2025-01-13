import {motion} from 'framer-motion'

export const HeroInverse = () => {
    const meImage =
        'https://media.licdn.com/dms/image/v2/D5603AQEp7f1cL_q0OA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681203691997?e=1742428800&v=beta&t=Fn1vWOoa-haIbeGdTckHHjg71MXvRPW72oE56synwvU'

    const aboutMeHero = {
        image: meImage,
        introduction: `Hi, I am <br/> Matthew <span class='text-primary'>Catalfamo</span>`,
        description: `I am a Front-End Developer who is passionate about building website UIs that provides users with the best experience.`,
    }

    return (
        <div
            className={
                'relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#0582CA,#006494_20%,#003554_45%,#051923_85%)]'
            }
            id={'home2'}
        >
            <div
                className={
                    'absolute bg-black w-[150rem] h-[62.5rem] rounded-[50%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#051923_85%,#00A6FB)] bottom-[49rem] border border-[#8CD6DE]/30'
                }
            ></div>

            <div className={'container relative mx-auto px-4 pt-12 pb-24 h-screen'}>
                <div className={'flex flex-col items-center justify-center text-center z-10 h-full'}>
                    <motion.div
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8}}
                        className={'relative mb-8 mt-24'}
                    >
                        <div
                            className={'absolute inset-0 bg-gradient-to-b from-primary to-transparent rounded-full blur-3xl'}
                        ></div>
                        <img src={meImage} alt="Matthew Catalfamo" className={'w-[15.625rem] relative z-10 rounded-full'} />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className={'max-w-2xl'}
                    >
                        <h1
                            className={'text-6xl md:text-7xl font-bold tracking-tighter mb-4'}
                            dangerouslySetInnerHTML={{__html: aboutMeHero.introduction}}
                        ></h1>
                        <p className={'text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6'}>{aboutMeHero.description}</p>
                        <div className={'flex gap-4 justify-center'}>
                            <motion.button
                                whileHover={{scale: 1.05}}
                                onClick={() => (window.location.href = '#contact')}
                                className={'px-6 py-3 bg-primary rounded-full font-medium hover:bg-secondary transition-colors'}
                            >
                                Contact Me
                            </motion.button>
                            <motion.button
                                whileHover={{scale: 1.05}}
                                onClick={() => (window.location.href = '#portfolio')}
                                className={
                                    'px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors'
                                }
                            >
                                View Work
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    animate={{
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className={'absolute bottom-[18rem] right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-xl'}
                ></motion.div>
            </div>
        </div>
    )
}
