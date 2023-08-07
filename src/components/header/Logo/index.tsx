import Link from "next/link";
import React from "react";


type LogTypes = {
  title: string;
};

function Logo({ title }: LogTypes): React.JSX.Element {
  return (
    <Link className="text-gray-800 dark:text-gray-400 text-xl  md:text-2xl font-semibold" href="/">
      {title}
    </Link>
  );
}

export default Logo;
