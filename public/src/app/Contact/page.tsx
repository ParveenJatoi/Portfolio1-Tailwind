import Link from 'next/link';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">Contact Us</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
          <span className="text-3xl">📧</span>
          <div>
            <h2 className="text-xl font-semibold text-blue-600">Email</h2>
            <p>
              <Link href="mailto:your-email@gmail.com" className="text-blue-500 hover:underline">
                your-email@gmail.com
              </Link>
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
          <span className="text-3xl">📱</span>
          <div>
            <h2 className="text-xl font-semibold text-blue-600">Mobile</h2>
            <p>+1 234 567 890</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
          <span className="text-3xl">🏠</span>
          <div>
            <h2 className="text-xl font-semibold text-blue-600">Home Phone</h2>
            <p>+1 234 567 891</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;