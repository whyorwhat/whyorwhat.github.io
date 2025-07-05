// src/components/projects/whatsapp/WhatsappNavbar.jsx
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function ReplyiaNavbar() {
    const { t } = useTranslation("whatsapp");

    return (
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo / brand  */}
                <div
                    className="text-lg font-semibold tracking-tight text-green-600"
                >
                    Reply<span className="font-extrabold text-gray-900">IA</span>
                </div>

                {/* CTA scroll-link */}
                <a
                    href="#cta"
                    className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                    {t("navbar.contactsBtn")}
                </a>
            </div>
        </nav>
    );
}