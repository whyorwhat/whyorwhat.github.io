import { motion } from "framer-motion";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import {
    RocketIcon,
    DollarSignIcon,
    ClockIcon,
    MessageSquareIcon,
    GridIcon,
    ChartPieIcon,
} from "lucide-react";

const chooseData = [
    {
        id: "aiAutomation",
        Icon: RocketIcon,
        iconClass: "text-green-500",
        gradientFrom: "from-green-100/20",
    },
    {
        id: "availability",
        Icon: ClockIcon,
        iconClass: "text-blue-500",
        gradientFrom: "from-blue-100/20",
    },
    {
        id: "instantReplies",
        Icon: MessageSquareIcon,
        iconClass: "text-yellow-500",
        gradientFrom: "from-yellow-100/20",
    },
    {
        id: "smartRouting",
        Icon: GridIcon,
        iconClass: "text-purple-500",
        gradientFrom: "from-purple-100/20",
    },
    {
        id: "rapidScaling",
        Icon: DollarSignIcon,
        iconClass: "text-orange-500",
        gradientFrom: "from-orange-100/20",
    },
    {
        id: "deepInsights",
        Icon: ChartPieIcon,
        iconClass: "text-indigo-500",
        gradientFrom: "from-indigo-100/20",
    },
];

export default function WhyChooseSection() {
    const { t } = useTranslation("whatsapp");

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12">
                {t("whyChoose.sectionTitle")}
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {chooseData.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        className={clsx(
                            "bg-gradient-to-br rounded-xl shadow-xl",
                            item.gradientFrom,
                            "to-white/0 p-6 flex flex-col items-center text-center"
                        )}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                        <item.Icon className={clsx("w-12 h-12 mb-4", item.iconClass)} />
                        <h3 className="text-xl font-semibold mb-2">
                            {t(`whyChoose.${item.id}.title`)}
                        </h3>
                        <p className="text-gray-600">{t(`whyChoose.${item.id}.desc`)}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}