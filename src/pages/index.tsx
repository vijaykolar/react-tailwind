import AppLayout from "@/AppLayout";
import Header from "@/components/header";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { teams } from "@/components/header/side-menu/data";
import { classNames } from "@/utils/classNames";
import Link from "next/link";

function Homepage() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <AppLayout>
      <div className="lg:pl-72">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* Your content */}
            Homepage
          </div>
        </main>
      </div>
    </AppLayout>
  );
}

export default Homepage;
