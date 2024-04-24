import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-blue-800 text-white">
      <div className="text-9xl font-bold mb-4">404</div>
      <div className="text-4xl font-medium mb-8">Page Not Found</div>
      <Link to="/" className="bg-white text-[#003FE4] px-6 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
