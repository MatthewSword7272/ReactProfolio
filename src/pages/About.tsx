const About = () => {
    const aboutMe = {
        background: 'I am a Computer Science graduate',
        skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Laravel', 'Tailwind CSS'],
        expertise: 'I specialise in building robust and scalable website UIs using modern technologies',
    }

    return (
        <section className={'text-white p-8'} id="about">
            <h2 className={'text-6xl font-bold mb-8'}>
                About <span className={'text-primary'}>Me</span>
            </h2>
            <div className={'grid grid-cols-1 md:grid-cols-3 gap-8'}>
                <div className={'border border-white/20 rounded-lg p-6'}>
                    <h3>01. Background</h3>
                    <p className={'text-white/50 mb-6'}>{aboutMe.background}</p>
                    <div className={'rounded-lg p-4 mb-4 border border-white/20'}>
                        <code className={'text-[#00A6FB]/80'}>
                            const skills = [
                            {aboutMe.skills.map((skill, index) => (
                                <div key={index}>&nbsp;&nbsp;'{skill}'</div>
                            ))}
                            ];
                        </code>
                    </div>
                </div>
                <div className={'border border-white/20 rounded-lg p-6'}>
                    <h3>02. Expertise</h3>
                    <p className={'text-white/50 mb-6'}>{aboutMe.expertise}</p>
                    <div className={'rounded-lg p-4 mt-4 border border-white/20 relative h-[13.75rem] overflow-hidden'}>
                        <img src="" alt="Project 1" className={'absolute inset-0 w-full h-full object-cover'} />
                    </div>
                </div>
                <div className={'border border-white/20 rounded-lg p-6 md:text-start text-center'}>
                    <h3>03. Skils</h3>
                    <p className={'text-white/50 mb-6'}>{aboutMe.expertise}</p>
                    <div className={'grid grid-cols-2 gap-4'}>
                        <div className={'border border-white/20 rounded-lg p-3'}>
                            <h4 className={'text-primary font-medium mb-2'}>Front-End</h4>
                            <ul className={'text-white/50 space-y-1 text-sm'}>
                                {aboutMe.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={'border border-white/20 rounded-lg p-3'}>
                            <h4 className={'text-primary font-medium mb-2'}>Back-End</h4>
                            <ul className={'text-white/50 space-y-1 text-sm'}>
                                <li>Node.js</li>
                                <li>Laravel</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'}>
                <div className={'border border-white/20 rounded-lg p-6'}>
                    <div className={'space-y-6'}>
                        <div>
                            <label className={'block text-sm font-medium mb-1'}>Front-End</label>
                            <div className={'w-full bg-white/10 rounded-full h-2'}>
                                <div className={'bg-primary h-2 rounded-full'} style={{width: '90%'}}></div>
                            </div>
                        </div>
                    </div>
                    <h3 className={'mt-4'}>.04 Approach</h3>
                    <p className={'text-white/50'}>
                        I believe in writing clean, maintainable code and following best practices. My approach involves{' '}
                    </p>
                </div>
                <div className={'border border-white/20 rounded-lg p-6 flex flex-col justify-between'}>
                    <div className={'relative border border-white/20 rounded-lg p-4 h-[12.5rem] overflow-hidden'}>
                        <img src="" alt="Project 2" className={'absolute inset-0 w-full h-full object-cover'} />
                    </div>
                    <div>
                        <h3>.05 Goals</h3>
                        <p className={'text-white/50'}>
                            I believe in writing clean, maintainable code and following best practices. My approach involves{' '}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
