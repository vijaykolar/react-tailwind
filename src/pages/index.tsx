import React from "react";

import AppLayout from "../AppLayout";

function HomePage() {
  return (
    <AppLayout>
      {/*<header>*/}
      {/*  <Link to="/">Home</Link>*/}
      {/*  <Link to="/about">about</Link>*/}
      {/*</header>*/}
      <section className="grid grid-cols-2">
        <aside className="w-60 fixed left-0 top-[65px]  border-r border-gray-300 dark:border-gray-600  h-[100vh]">
          <div className="p-2">2</div>
        </aside>
      </section>
    </AppLayout>
  );
}
export default HomePage;
