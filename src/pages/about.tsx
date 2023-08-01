import React from "react";

import AppLayout from "../AppLayout";
import { Link } from "gatsby";
function AboutPage() {
  return (
    <AppLayout>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
      </header>
      About page
    </AppLayout>
  );
}
export default AboutPage;
