import { useState } from "react";

const Links = ({ links }) => {
  const [title, setTitle] = useState(null);
  const { id, name, link, icon } = links;

  function handleTitle(links) {
    setTitle((open) => (id === links.id ? !open : null));
  }

  return (
    <a href={link} className="flex flex-row gap-[6px] items-center">
      <span
        onMouseEnter={() => handleTitle(links)}
        onMouseLeave={() => setTitle(null)}
        className="desktopnav"
      >
        {icon}
      </span>
      {title && (
        <p className="text-sm font-semibold capitalize text-bg1  bg-white px-1">
          {name}
        </p>
      )}
    </a>
  );
};

export default Links;
