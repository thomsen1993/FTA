import React from "react";

import { FcSettings } from "react-icons/fc";

interface HoverEditer {
    children: any
}

const HoverEditer: React.FC<HoverEditer> = ({ children }) => {
  return (
    <div className="border border-transparent transition hover:border-neutral-400 rounded-md cursor-pointer p-1 relative group">
      <FcSettings className="opacity-0 transition group-hover:animate-spin group-hover:opacity-100 text-3xl absolute -top-3 -right-3" />
      {children}
    </div>
  );
};

export default HoverEditer;
