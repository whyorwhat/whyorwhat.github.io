import { motion } from "framer-motion";
import NotificationsCarousel from "@/components/projects/replyia/featureAnimations/NotificationsCarousel.jsx";
import CategoryFlowAnimation from "@/components/projects/replyia/featureAnimations/CategoryAnimation.jsx";
import TemplateMessagesAnimation from "@/components/projects/replyia/featureAnimations/TemplateMessagesAnimation.jsx";
import CustomControlCenterAnimation
    from "@/components/projects/replyia/featureAnimations/ContactDashboardAnimation.jsx";
import {useTranslation} from "react-i18next";

const FeaturesSection = () => {
    const {t} = useTranslation("whatsapp");

    const features = [
        {
            id: 1,
            title: t("features.0.title"),
            description: t("features.0.description"),
            Animation: CustomControlCenterAnimation,
            desktopLayout: "md:flex-row",   // su desktop testo a sinistra, animazione a destra
        },
        {
            id: 2,
            title: t("features.1.title"),
            description: t("features.1.description"),
            Animation: CategoryFlowAnimation,
            desktopLayout: "md:flex-col",   // testo sopra, animazione sotto sia mobile che desktop
        },
        {
            id: 3,
            title: t("features.2.title"),
            description: t("features.2.description"),
            Animation: NotificationsCarousel,
            desktopLayout: "md:flex-col-reverse",   // animazione sopra, testo sotto
        },
        {
            id: 4,
            title: t("features.3.title"),
            description: t("features.3.description"),
            Animation: TemplateMessagesAnimation,
            desktopLayout: "md:flex-row-reverse",   // su desktop animazione a sinistra, testo a destra
        },
    ];
    return(
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feat) => (
                    <motion.div
                        key={feat.id}
                        className={`
                        col-span-1
                        ${[1, 4].includes(feat.id) ? "md:col-span-2" : ""}
                        bg-gradient-to-br from-gray-200/30 to-gray-100/0
                        rounded-xl shadow-xl
                        p-4       /* 1rem  */
                        sm:p-6    /* 1.5rem */
                        md:p-8    /* 2rem   */
                        lg:p-16   /* 2.5rem */
                        flex flex-col ${feat.desktopLayout} 
                        gap-4            /* gap verticale su mobile */
                        md:gap-y-6       /* gap verticale su desktop */
                        md:gap-x-10      /* gap orizzontale più ampio su desktop */
                    `}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.6}}
                    >
                        <div className="flex-1">
                            <h3 className="text-3xl font-medium text-gray-900 mb-4">{feat.title}</h3>
                            <p className="text-lg font-light text-gray-500">
                                {feat.description}
                            </p>
                        </div>

                        {/* Ecco la riga modificata */}
                        <div className="flex-1 w-full">
                            <feat.Animation/>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;