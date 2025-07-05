import { useTranslation } from "react-i18next";

export default function CTA({ id = "cta" }) {
    const { t } = useTranslation("whatsapp");

    return (
        <section
            id={id}
            className="py-16 px-6 sm:px-12 lg:px-20 text-center"
        >
            <h2 className="text-3xl font-bold mb-4">
                {t("cta.title")}
            </h2>

            <p className="text-lg text-gray-700 mb-6">
                {t("cta.desc")}
            </p>

            <a
                href="/#/contacts"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
                {t("cta.button")}
            </a>
        </section>
    );
}