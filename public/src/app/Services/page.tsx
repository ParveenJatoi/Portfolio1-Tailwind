export default function Services() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800 ">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">My Services</h1>
        <p className="text-lg text-center mx-auto mb-10 max-w-2xl text-gray-600">
          As a dedicated web developer, I offer a range of services to help businesses establish their online presence and achieve their goals.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <section className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 text-center">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Web Development</h2>
            <p className="mb-2">Custom website development using modern technologies.</p>
            <p className="font-semibold">Technologies:</p>
            <p>HTML, CSS, JavaScript, React, Next.js</p>
            <p className="font-semibold">Key Features:</p>
            <p>Responsive design, user-friendly interfaces</p>
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 text-center">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">E-commerce Solutions</h2>
            <p className="mb-2">Development of robust e-commerce platforms.</p>
            <p className="font-semibold">Key Features:</p>
            <p>Payment gateway integration, inventory management</p>
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 text-center">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">UI/UX Design</h2>
            <p className="mb-2">Creating intuitive and engaging user interfaces.</p>
            <p className="font-semibold">Key Features:</p>
            <p>User research, wireframing, prototyping</p>
          </section>
        </div>
  
        {/* <div className="text-center mt-10">
          <h3 className="text-3xl font-semibold text-orange-600 mb-6">Testimonials</h3>
          {/* <blockquote className="italic text-gray-600 max-w-lg mx-auto">
            "Parveen's work transformed our online presence. Highly recommended!" - Client Name
          </blockquote> */}
        {/* </div> */}
         
        <div className="text-center mt-10">
          <h3 className="text-3xl font-semibold text-blue-800 mb-4">Get In Touch</h3>
          <p>
            If you are interested in working together, feel free to <a href="/contact" className="text-orange-600 underline">contact me</a> for a consultation!
          </p>
        </div>
      </div>
    );
  }