import React from "react";
import { Link } from "gatsby";

type LogTypes = {
  title: string;
};

function Logo({ title }: LogTypes): React.JSX.Element {
  return (
    <Link className="text-gray-800 text-xl  md:text-2xl font-semibold" to="/">
      {title}
    </Link>
  );
}

export default Logo;
