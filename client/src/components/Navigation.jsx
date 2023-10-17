import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="relative h-32 w-32 ...">
      <ul>
        <Link to="/credentials">
          <li className="hover:text-gray-500">Credential app</li>
        </Link>
        <Link to="/credentials-form">
          <li className="hover:text-gray-500">Credential Form</li>
        </Link>
      </ul>
    </nav>
  );
}
