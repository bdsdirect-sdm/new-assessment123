
import { FaTools } from 'react-icons/fa'; // Import an icon

const CustomerSignup = () => {
  return (
    <div className='flex flex-col items-center justify-center h-64 p-6 bg-gray-100 rounded-lg shadow-md'>
      {/* Icon with animation */}
      <FaTools className='text-6xl text-indigo-500 animate-bounce mb-4' />
      
      {/* Message */}
      <h2 className='text-2xl font-bold text-gray-800 mb-2'>
        Development in Progress
      </h2>
      <p className='text-gray-600'>
        We're working hard to bring you the best experience. Stay tuned!
      </p>
    </div>
  );
};

export default CustomerSignup;
