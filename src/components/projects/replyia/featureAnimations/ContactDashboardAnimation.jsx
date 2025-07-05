import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    FaTags,
    FaTools,
    FaFileInvoiceDollar,
    FaHeadset, FaRegUserCircle,
} from "react-icons/fa";
import {useTranslation} from "react-i18next";

// Status IDs (internationalized via t())
const STATUS_IDS = ["chatting", "needsResponse", "waitingReply", "solved"];

// Status badge styles
const STATUS_CLASSES = {
    chatting: "bg-green-100 text-green-800",
    waitingReply: "bg-yellow-100 text-yellow-800",
    needsResponse: "bg-orange-100 text-orange-800",
    solved: "bg-gray-100 text-gray-600",
};

// Static mock data using IDs
const contacts = [
    { fullName: "1", category: "support", team: "t1", time: "13:31" },
    { fullName: "2", category: "tech", team: "t2", time: "09:42" },
    { fullName: "3", category: "billing", team: "t3", date: "tue", time: "07:24" },
    { fullName: "4", category: "sales", team: "t4", date: "mon", time: "09:15" },
];

function getCategoryIcon(cat) {
    switch (cat) {
        case "sales": return <FaTags className="text-blue-500" />;
        case "tech": return <FaTools className="text-green-500" />;
        case "billing": return <FaFileInvoiceDollar className="text-yellow-500" />;
        case "support": return <FaHeadset className="text-purple-500" />;
        default: return null;
    }
}

function ContactRow({ contact }) {
    const { t } = useTranslation("whatsapp");

    // funzione helper per un indice casuale
    const randIndex = (arr) => Math.floor(Math.random() * arr.length);
    // inizializzo notifiche e stato in modo casuale
    const [notif, setNotif] = useState(() => Math.floor(Math.random() * 4));
    const [status, setStatus] = useState(() => STATUS_IDS[randIndex(STATUS_IDS)]);

    useEffect(() => {
        const notifTimer = setInterval(() => {
            setNotif(Math.floor(Math.random() * 4));  // 0-3
        }, 5000 + Math.random() * 5000);

        const statusTimer = setInterval(() => {
            setStatus(STATUS_IDS[Math.floor(Math.random() * STATUS_IDS.length)]);
        }, 15000 + Math.random() * 15000);

        return () => {
            clearInterval(notifTimer);
            clearInterval(statusTimer);
        };
    }, []);

    return (
        <motion.li
            className="flex items-center                 /* sempre in riga */
                bg-white border border-gray-100 rounded-lg
                p-4 space-x-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Avatar */}
            <img
                src={`https://i.pravatar.cc/32?u=${contact.team}`}
                alt={contact.team}
                className="w-8 h-8 rounded-full flex-shrink-0"
            />

            {/* Details */}
            <div className="flex-1">
                <div className="flex flex-row items-center space-x-2">
                    <div className="text-sm font-semibold text-gray-900 truncate">
                        {t(`dashboard.contacts.${contact.fullName}`)}
                    </div>
                    {/* Category tag */}
                    <div className="flex items-center space-x-1 bg-gray-200 px-2 py-0.5 rounded-full text-xs mt-1 sm:mt-0">
                        {getCategoryIcon(contact.category)}
                        <span className="truncate">{t(`dashboard.categories.${contact.category}`)}</span>
                    </div>
                </div>
                <div className="flex flex-row items-center space-x-2 mt-1">
                    {/* Status tag */}
                    <motion.div
                        className={`${STATUS_CLASSES[status]} text-xs px-2 py-0.5 rounded-full mb-1 sm:mb-0`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                    >
                        {t(`dashboard.statuses.${status}`)}
                    </motion.div>

                    {/* Managed by */}
                    <div className="flex justify-center gap-1 items-center bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                        <FaRegUserCircle size={12}/> {t(`dashboard.teams.${contact.team}`)}
                    </div>
                </div>
            </div>

            {/* Badge + Date/Time */}
            <div className="ml-auto flex flex-col items-end text-xs text-gray-500">
                <motion.div
                    key={notif}
                    className="bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center"
                    initial={{ scale: notif > 0 ? 0.5 : 0, opacity: notif > 0 ? 0.5 : 0 }}
                    animate={{ scale: notif > 0 ? [1,1.2,1] : 0, opacity: notif > 0 ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {notif > 0 ? notif : null}
                </motion.div>
                <div className="mt-1">
                    {contact.date ? `${t(`dashboard.days.${contact.date}`)}, ${contact.time}` : contact.time}
                </div>
            </div>
        </motion.li>
    );
}

export default function ContactDashboardAnimation() {
    const { t } = useTranslation("whatsapp");

    return (
        <div>
            <ul className="space-y-3 sm:space-y-4">
                {contacts.map((c) => (
                    <ContactRow key={c.fullName} contact={c} t={t} />
                ))}
            </ul>
        </div>
    );
}
