import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTags, FaTools, FaFileInvoiceDollar, FaHeadset } from "react-icons/fa";
import {useTranslation} from "react-i18next";

export default function CategoryTabsWithMessages() {
    const { t } = useTranslation("whatsapp");

    const categories = [
        {
            id: "sales",
            label: t("categories.sales.label"),
            icon: <FaTags size={20} className="text-blue-500" />,
            messages: t("categories.sales.messages", { returnObjects: true }),
        },
        {
            id: "tech",
            label: t("categories.tech.label"),
            icon: <FaTools size={20} className="text-green-500" />,
            messages: t("categories.tech.messages", { returnObjects: true }),
        },
        {
            id: "billing",
            label: t("categories.billing.label"),
            icon: <FaFileInvoiceDollar size={20} className="text-yellow-500" />,
            messages: t("categories.billing.messages", { returnObjects: true }),
        },
        {
            id: "support",
            label: t("categories.support.label"),
            icon: <FaHeadset size={20} className="text-purple-500" />,
            messages: t("categories.support.messages", { returnObjects: true }),
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // auto‐rotate
    useEffect(() => {
        const id = setInterval(() => setActiveIndex((i) => (i + 1) % categories.length), 5000);
        return () => clearInterval(id);
    }, []);

    // fixed container height
    const maxMsgs = Math.max(...categories.map((c) => c.messages.length));
    const row = 2.5;
    const gap = 1;
    const minH = maxMsgs * row + (maxMsgs - 1) * gap;

    return (
        <div className="w-full max-w-3xl mx-auto select-none">
            {/* Tabs */}
            <div className="flex justify-between rounded-xl">
                {categories.map((cat, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                        <motion.div
                            key={cat.id}
                            layout
                            className={`flex items-center justify-center rounded-lg p-2 ${isActive ? "bg-white shadow" : "bg-transparent"}`}
                            // no click — purely driven by auto‑rotate
                            initial={false}
                            animate={{ width: isActive ? 120 : 40 }}
                            transition={{ duration: 0.45, ease: "easeInOut" }}
                        >
                            {cat.icon}
                            {/* label always rendered for smoother width animation */}
                            <motion.span
                                className="ml-2 text-sm font-medium text-gray-900 overflow-hidden inline-block"
                                initial={{ maxWidth: 0, opacity: 0 }}
                                animate={{ maxWidth: isActive ? 80 : 0, opacity: isActive ? 1 : 0 }}
                                transition={{ duration: 0.45, ease: "easeInOut" }}
                            >
                                {cat.label}
                            </motion.span>
                        </motion.div>
                    );
                })}
            </div>

            {/* Messages */}
            <div className="mt-6" style={{ minHeight: `${minH}rem` }}>
                <AnimatePresence mode="wait">
                    <motion.ul
                        key={categories[activeIndex].id}
                        className="flex flex-col space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {categories[activeIndex].messages.map((msg) => {
                            const [first, last] = msg.name.split(" ");
                            const initials = `${first[0]}${last[0]}`;
                            return (
                                <li key={msg.id} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                                        {initials.toUpperCase()}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold uppercase text-gray-900">
                                            {msg.name.toUpperCase()}
                                        </div>
                                        <div className="text-sm text-gray-700">{msg.text}</div>
                                    </div>
                                </li>
                            );
                        })}
                    </motion.ul>
                </AnimatePresence>
            </div>
        </div>
    );
}
