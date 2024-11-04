import Image from 'next/image';

function Skills() {
    return (
        <div className="bg-gray-800 py-12 text-center">
            {/* Skills Section */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8">My Skills</h2>
            
            <div className="flex flex-wrap justify-center gap-10 md:gap-12 lg:gap-16 px-4">
                {/* Logos with links */}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                    <Image src="/html.png" alt="HTML" width={100} height={100} className="skill-logo" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                    <Image src="/css.png" alt="CSS" width={100} height={100} className="skill-logo" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                    <Image src="/javascript.jpeg" alt="JavaScript" width={100} height={100} className="skill-logo" />
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                    <Image src="/typescript.png" alt="TypeScript" width={100} height={100} className="skill-logo" />
                </a>
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                    <Image src="/tailwind.jpeg" alt="Tailwind CSS" width={100} height={100} className="skill-logo" />
                </a>
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                    <Image src="/nextjs.png" alt="Next.js" width={100} height={100} className="skill-logo" />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                    <Image src="/reactjs.jpeg" alt="React" width={100} height={100} className="skill-logo" />
                </a>
            </div>
        </div>
    );
}

export default Skills;