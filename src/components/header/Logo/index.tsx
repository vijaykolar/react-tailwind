import React from "react";
import { Link } from "gatsby";

type LogTypes = {
  title: string;
};

function Logo({ title }: LogTypes): React.JSX.Element {
  return <Link to="/">{title}</Link>;
}

export default Logo;
