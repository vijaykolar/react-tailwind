import Head from "next/head";
import AppLayout from "@/AppLayout";
import Stats from "@/ui/stats";

function Homepage() {
  return (
    <AppLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="lg:pl-72 ">
        <main className="p-4 sm:p-6 lg:p-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-500">
              Ecommerce Dashboard
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Here’s what’s going on at your business right now
            </p>
          </div>
          <div className="my-5 grid md:grid-cols-3 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600 dark:border  shadow md:divide-x dark:md:divide-gray-600 md:divide-y-0">
            <Stats />
          </div>
          <div className="mt-10">
            <div className="md:flex md:justify-between ">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-500">
                  Total sells
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Payment received across all channels
                </p>
              </div>
              <div>
                <select
                  name=""
                  id=""
                  className="mt-4 md:mt-0 block md:w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-gray-500 dark:bg-gray-800 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="1">Jan 1-31, 2021</option>
                  <option value="1">Apr 1-31, 2021</option>
                  <option value="1">Aug 1-31, 2021</option>
                  <option value="1">Dec 1-31, 2021</option>
                </select>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  );
}

export default Homepage;
