import React from "react";
import { Link } from "react-router-dom"; // Use if working with React Router

const Breadcrumb = ({
  items,
  colors = {
    bg: 'bg-gray-50',
    text: 'text-gray-600',
    hover: 'hover:text-blue-500',
    separator: 'text-gray-400',
    current: {
      text: 'text-gray-900',
     bg: 'bg-gray-200',
    }
  }
}) => {
  return (
    <nav className={`${colors.bg}  pb-5  rounded-lg`}>
      <ul className="flex items-center space-x-2 text-sm md:text-[15px]">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              {item.href ? (
                <Link
                  to={item.href}
                  className={`${colors.text} ${colors.hover} transition-colors px-1 py-1 rounded`}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                to={item.href}><span className={`${colors.current.text}  py-1 rounded lg:font-medium  font-small `}>
                  {colors.current.indicator && (
                    <span className="mr-1">{colors.current.indicator}</span>
                  )}
                  {item.label}
                </span></Link>
              )}
            </li>
            {index < items.length - 1 && (
              <li className={colors.separator}>/</li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};
export default Breadcrumb;