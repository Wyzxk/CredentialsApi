import { Link } from "react-router-dom";

// Component Navigation 
export function Navigation() {
  return (
    <nav className="py-3 pb-10">
      <ul className="flex justify-between">
        <Link to="/credentials">
          <li className="hover:text-gray-500 text-2xl mb-3">Credential App</li>
        </Link>
        <button className=" bg-indigo-500 hover:bg-indigo-600 px-3 py-1 rounded-lg">
          <Link to="/credentials-form">
            <li className="text-1xl">Credential Form</li>
          </Link>
        </button>
      </ul>
    </nav>
  );
}
