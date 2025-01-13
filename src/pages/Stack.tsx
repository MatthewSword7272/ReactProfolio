import {useAnimation} from 'framer-motion'
import {useEffect} from 'react'
import {SiFigma, SiFramer, SiLemonsqueezy, SiNodedotjs, SiReact} from 'react-icons/si'
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'

const stackItems = [
    {id: 1, name: 'Framer', icon: <SiFramer size={100} />, color: 'text-[#00A6FB]'},
    {id: 2, name: 'Figma', icon: <SiFigma size={100} />, color: 'text-[#00A6FB]'},
    {id: 3, name: 'React', icon: <SiReact size={100} />, color: 'text-[#00A6FB]'},
    {id: 4, name: 'Node.js', icon: <SiNodedotjs size={100} />, color: 'text-[#00A6FB]'},
    {id: 5, name: 'Lemon Squeezy', icon: <SiLemonsqueezy size={100} />, color: 'text-[#00A6FB]'},
]

const Stack = () => {
    const controls = useAnimation()

    const [ref, inView] = useInView({threshold: 0.1})

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        }
    }, [controls, inView])

    return (
        <section className={'py-24 md:py-64 max-w-[75rem] mx-auto text-center'} id={'stack'}>
            <h2 className={'text-7xl text-gray-100 font-bold mb-20'}>My Stack</h2>
            <div className={'flex flex-wrap justify-center gap-8'} ref={ref}>
                {stackItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        custom={index}
                        initial={'hidden'}
                        animate={controls}
                        variants={{
                            hidden: (index) => ({
                                opacity: 0,
                                y: index % 2 === 0 ? -100 : 100,
                            }),
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1.5,
                                },
                            },
                        }}
                        className={
                            'bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300'
                        }
                    >
                        <div className={`${item.color} mb-4`}>{item.icon}</div>
                        <h3 className={'text-xl font-normal text-white/20'}>{item.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Stack
