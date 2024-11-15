import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-200">
      <Image 
        src="/profile-pics.jpg" // Replace with the actual image name in the public directory
        alt="Parveen Jatoi"
        className="rounded-full w-48 h-48 object-cover mx-auto" // Tailwind classes for circular and centered image
        width={200} 
        height={200}
      />
      <h1 className="text-4xl font-bold my-5">About Me</h1>
      <p className="text-lg mb-4 leading-relaxed text-center">
        Hi, I am <strong>Parveen Jatoi</strong>, a dedicated learner currently enrolled in the 
        Government IT Initiative for Generative AI and Cloud Computing Engineering course. 
        I have successfully completed my first quarter and am currently in my second quarter, 
        where I am expanding my skills and knowledge in these exciting fields.
      </p>
      <p className="text-lg mb-4 leading-relaxed text-center">
        I have learned <strong>TypeScript, JavaScript, HTML, CSS,</strong> and <strong>Tailwind CSS</strong>, 
        and I am currently exploring <strong>Next.js</strong>. I have completed many projects that demonstrate 
        my skills and creativity.
      </p>
      <p className="text-lg mb-4 leading-relaxed text-center">
        You can check out my projects <Link href="/projects" className="text-blue-600 underline">here</Link>.
      </p>
      <p className="text-lg mb-4 leading-relaxed text-center">
        I am passionate about leveraging technology to solve real-world problems and am eager to 
        apply what I have learned to create innovative solutions.
      </p>
      <p className="text-lg mb-4 leading-relaxed text-center">
        Thank you for visiting my portfolio!
      </p>
    </div>
  );
}
