import { Link } from 'react-router-dom';
 
function NotFound() {
  return (
    <div className="text-center p-16">
      <h1 className="text-9xl font-bold text-gray-300">404</h1>
      <p className="text-2xl mt-4">Page not found</p>
      <Link to="/" className="text-blue-600 mt-6 inline-block hover:underline">
        ← Go home
      </Link>
    </div>
  );
}
export default NotFound;
