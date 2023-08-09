import React from "react";

import AppLayout from "../AppLayout";

import Head from "next/head";

function AboutPage() {
  return (
    <AppLayout>
      <Head>
        <title>Dashboard - About</title>
      </Head>
      <div className="lg:pl-72">
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="">
            {/* Your content */}
            about page
          </div>
        </main>
      </div>
    </AppLayout>
  );
}
export default AboutPage;
