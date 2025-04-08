import React from "react";
import { Link } from "react-router-dom"; // Use if working with React Router

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-gray-600 text-sm">
      <ul className="flex items-center space-x-2">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              {item.href ? (
                <Link to={item.href} className="hover:text-blue-500">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-500">{item.label}</span>
              )}
            </li>
            {index < items.length - 1 && <li>/</li>}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
