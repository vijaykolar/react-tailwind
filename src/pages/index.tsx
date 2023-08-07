import React from "react";

import AppLayout from "../AppLayout";
import { HiChartPie, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Link from "next/link";

function HomePage() {
  return (
    <AppLayout>
      {/*<header>*/}
      {/*  <Link to="/">Home</Link>*/}
      {/*  <Link to="/about">about</Link>*/}
      {/*</header>*/}
      <section className="md:grid md:grid-cols-2">
        <aside className=" fixed md:static w-60 left-0 -translate-x-full md:translate-x-0 duration-300 transition-all border-r border-gray-300 dark:border-gray-600 h-[100vh] md:w-60 ">
          <div className="p-4 overflow-y-auto h-full">
            <div>
              <ul>
                {[
                  1, 2, 4, 33, 5, 6, 78, 7, 9, 443, 34, 323534, 5435643, 6546,
                  654654645, 3245, 5435345, 24235, 4353, 4654, 6,
                ].map((el) => (
                  <li key={el}>
                    <Link
                      className="p-2 inline-block text-sm dark:text-gray-400"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <article className="p-3 border-gray-300 dark:border-gray-600 rounded border columns-auto m-5">
          ddddddd
        </article>
      </section>
    </AppLayout>
  );
}
export default HomePage;
