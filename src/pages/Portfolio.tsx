import {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {FiChevronsDown} from 'react-icons/fi'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {FaGithub} from 'react-icons/fa'

const projects = [
    {
        title: 'Project 1',
        description: 'This is a description of project 1',
        devstack: 'React, TailwindCSS, Firebase',
        link: '#',
        git: '#',
        src: '',
        type: 'frontend',
    },
    {
        title: 'Project 2',
        description: 'This is a description of project 2',
        devstack: 'React, TailwindCSS, Firebase',
        link: '#',
        git: '#',
        src: '',
        type: 'frontend',
    },
]

const Portfolio = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }
    return (
        <div className={'text-white py-24 md:py-64'} id="portfolio">
            <div className={'container mx-auto px-4'}>
                <h2 className={'text-6xl font-bold text-center mb-16'}>
                    Selected <span className={'text-primary'}>Projects</span>
                </h2>
                <div className={'space-y-8'}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            className={
                                'bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'
                            }
                        >
                            <div
                                className={
                                    'flex p-6 justify-between items-center cursor-pointer bg-black/20 border border-white/20'
                                }
                                onClick={() => toggleExpand(index)}
                            >
                                <h3 className={'font-semibold'}>{project.title}</h3>
                                <span className={'flex items-center font-light text-primary'}>
                                    0{index + 1}
                                    <FiChevronsDown
                                        className={`w-6 h-6 transform transition-transform ${
                                            expandedIndex === index ? 'rotate-180' : ''
                                        }`}
                                    />
                                </span>
                            </div>
                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{height: 0, opacity: 0}}
                                        animate={{height: 'auto', opacity: 1}}
                                        exit={{height: 0, opacity: 0}}
                                        transition={{duration: 0.3}}
                                        className={'px-6 pb-6 bg-black/20 border border-white/10'}
                                    >
                                        <div className={'flex flex-col md:flex-row gap-8'}>
                                            <img
                                                src=""
                                                alt={project.title}
                                                className={'w-full md:w-1/2 h-64 object-cover rounded-lg'}
                                            />
                                            <div className={'flex-1'}>
                                                <p className={'text-white/70 mb-4'}>{project.description}</p>
                                                <p className={'text-primary font-medium mb-2'}>Stack: {project.devstack}</p>
                                                <p className={'text-secondary font-medium mb-4 capitalize'}>
                                                    Type: {project.type}
                                                </p>
                                                <div className={'flex justify-start items-center space-x-4'}>
                                                    {project.link && (
                                                        <a
                                                            href={project.link}
                                                            className={'text-primary hover:text-blue-300 transition-colors'}
                                                        >
                                                            <HiOutlineExternalLink />
                                                        </a>
                                                    )}

                                                    {project.git && (
                                                        <a
                                                            href={project.git}
                                                            className={'text-primary hover:text-blue-300 transition-colors'}
                                                        >
                                                            <FaGithub />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
