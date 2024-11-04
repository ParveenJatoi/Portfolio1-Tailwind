
// src/app/projects/page.tsx
import Image from 'next/image';

const projects = [
    { id: 1, title: 'Digital Clock', description: 'Digital clock created with HTML, CSS, and JavaScript', imgSrc: '/digClock.jpeg', githubLink: 'https://github.com/yourusername/project-one' },
  { id: 2, title: 'Calculator', description: 'Calculator created with HTML, CSS, and JavaScript', imgSrc: '/calculator2.jpeg', githubLink: 'https://github.com/yourusername/project-two' },
  { id: 3, title: 'Analog Clock', description: 'Analog Clock created with HTML, CSS, and JavaScript', imgSrc: '/clock.jpeg', githubLink: 'https://github.com/yourusername/project-three' },
  { id: 4, title: 'Diamond Jewelry', description: 'Diamond Jewelry website created with Next.js and Tailwind', imgSrc: '/diamond.jpeg', githubLink: 'https://github.com/yourusername/project-four' },
  { id: 5, title: 'Fast Food', description: 'Fast Food webpage created with HTML, CSS, and JavaScript', imgSrc: '/fastfood.jpeg', githubLink: 'https://github.com/yourusername/project-five' },
  { id: 6, title: 'Perfumes', description: 'Perfume Website created with Next.js and Tailwind', imgSrc: '/perfumes.jpeg', githubLink: 'https://github.com/yourusername/project-six' },
  { id: 7, title: 'Portfolio', description: 'My portfolio webpage created with Next.js and CSS', imgSrc: '/image.jpeg', githubLink: 'https://github.com/yourusername/project-seven' },
  { id: 8, title: 'Facebook Login Page', description: 'Facebook Login Page created with HTML and CSS', imgSrc: '/facebook.jpeg', githubLink: 'https://github.com/yourusername/project-eight' },
  { id: 9, title: 'Calendar', description: 'A Cmd-based Calendar created with Python', imgSrc: '/Calender.jpeg', githubLink: 'https://github.com/yourusername/project-nine' },
  { id: 10, title: 'Figma Design', description: 'A tourist webpage created according to a Figma design', imgSrc: '/figma.jpeg', githubLink: 'https://github.com/yourusername/project-ten' },
  { id: 11, title: 'Light On/Off', description: 'On and Off light on click with JavaScript', imgSrc: '/bulb.jpeg', githubLink: 'https://github.com/yourusername/project-eleven' },
  { id: 12, title: 'Number Guessing Game', description: 'Created with JavaScript', imgSrc: '/numberguess.jpeg', githubLink: 'https://github.com/yourusername/project-twelve' },
];
  

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className="text-center text-4xl font-bold mb-10">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-full shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 w-64 h-64 mx-auto flex flex-col items-center justify-center text-center"
          >
            <div className="relative w-40 h-40">
              <Image
                src={project.imgSrc}
                alt={project.title}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            <p className="text-gray-600 px-4 text-sm mt-1">{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-orange-500 transition-colors duration-300"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}