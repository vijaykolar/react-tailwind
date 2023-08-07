import React from "react";

import AppLayout from "../AppLayout";
import Link from "next/link";


function AboutPage() {
  return (
    <AppLayout>
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
      </header>
      About page
    </AppLayout>
  );
}
export default AboutPage;
