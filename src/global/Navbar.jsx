// src/components/Navbar.jsx
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
    { name: "About Me", href: "/me" },
    { name: "Projects", href: "/projects" },
    { name: "Contacts", href: "/contacts" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    if (isHome) return null;

    return (
        <Disclosure as="nav" className="bg-white shadow-md z-50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex items-center">
                                <Link to="/" className="text-lg font-semibold tracking-tight text-blue-600">
                                    Simone Cotardo
                                </Link>
                            </div>

                            <div className="hidden md:flex space-x-4 items-center">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            location.pathname === item.href
                                                ? "text-blue-600 font-semibold"
                                                : "text-gray-600 hover:text-blue-500",
                                            "px-3 py-2 rounded-md text-sm transition"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="flex items-center md:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-blue-500 focus:outline-none">
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-4 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={Link}
                                    to={item.href}
                                    className={classNames(
                                        location.pathname === item.href
                                            ? "text-blue-600 font-semibold"
                                            : "text-gray-600 hover:text-blue-500",
                                        "block px-3 py-2 rounded-md text-base transition"
                                    )}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}