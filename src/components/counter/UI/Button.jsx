import { Link } from 'react-router-dom';

export default function Button({ onClick = () => {}, children, outline, type = 'button', to }) {
  const Element = to ? Link : 'button';
  return (
    <Element
      onClick={onClick}
      className={`${
        outline ? 'bg-white text-indigo-500' : 'bg-indigo-500 text-white'
      }  px-6 py-2 text-sm uppercase border font-semibold border-indigo-500 rounded-md`}
      type={type}
      to={to}>
      {children}
    </Element>
  );
}
