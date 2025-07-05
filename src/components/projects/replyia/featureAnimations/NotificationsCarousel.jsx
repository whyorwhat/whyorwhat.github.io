import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBell } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { IoMdInformationCircle } from "react-icons/io";
import { GoAlert, GoXCircleFill } from "react-icons/go";
import {useTranslation} from "react-i18next";

const data = [
    { id: "newRequest", icon: FaBell, color: "text-blue-500" },
    { id: "markedDone", icon: CiCircleCheck, color: "text-green-500" },
    { id: "infoUpdated", icon: IoMdInformationCircle, color: "text-gray-500" },
    { id: "waitingReply", icon: GoAlert, color: "text-red-500" },
    { id: "sendError", icon: GoXCircleFill, color: "text-yellow-500" },
];

const MAX_VISIBLE = 3;

export default function NotificationsCarousel() {
    const { t } = useTranslation("whatsapp");
    const [queue, setQueue] = useState([0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setQueue(prev => {
                const next = (prev[prev.length - 1] + 1) % data.length;
                const updated = [...prev, next];
                return updated.length > MAX_VISIBLE ? updated.slice(-MAX_VISIBLE) : updated;
            });
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-40 overflow-hidden select-none">
            <ul className="absolute bottom-0 w-full flex flex-col gap-2">
                <AnimatePresence initial={false}>
                    {queue.map((idx, i) => {
                        const { icon: Icon, color, id } = data[idx];
                        const isNewest = i === queue.length - 1;
                        const isOldest = i === 0 && queue.length === MAX_VISIBLE;

                        return (
                            <motion.li
                                key={idx}
                                layout
                                initial={isNewest ? { opacity: 0, y: 20 } : false}
                                animate={isNewest ? { opacity: 1, y: 0 } : {}}
                                exit={isOldest ? { opacity: 0, y: -20 } : {}}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="flex items-center gap-2 p-2
                                    border border-gray-200 bg-white rounded-xl"
                            >
                                <Icon size={20} className={color} />
                                <span className="text-base text-gray-800 whitespace-nowrap">
                                    {t(`notifications.${id}`)}
                                </span>
                            </motion.li>
                        );
                    })}
                </AnimatePresence>
            </ul>
        </div>
    );
}