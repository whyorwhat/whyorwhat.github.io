import HeroSection from "@/components/projects/replyia/HeroSection.jsx";
import FeaturesSection from "@/components/projects/replyia/FeaturesSection.jsx";
import CTA from "@/components/projects/replyia/CTA.jsx";
import ChatSimulation from "@/components/projects/replyia/chatAnimation/ChatSimulation.jsx";
import WhyChooseSection from "@/components/projects/replyia/WhyChooseSection.jsx";
import LanguageSwitcher from "@/global/multiLang/LanguageSwitcher.jsx";
import ReplyiaNavbar from "@/components/projects/replyia/ReplyiaNavbar.jsx";
import usePageMeta from "@/hooks/usePageMeta.ts";

export default function ReplyiaView() {
    usePageMeta({
        title: "ReplyIA | WhatsApp Chatbot",
        favicon: "/projects/replyia/replyia_favicon.ico",
    });

    return (
        <div className="font-inter bg-white">
            <ReplyiaNavbar />

            <div className="px-4 sm:px-6 lg:px-20">
                <HeroSection />

                <div className="my-20 px-4 sm:px-6 lg:px-20">
                    <ChatSimulation />
                </div>

                <FeaturesSection />

                <WhyChooseSection />

                <CTA />

                <div className="flex justify-end pt-4">
                    <LanguageSwitcher />
                </div>
            </div>
        </div>

    );
}
