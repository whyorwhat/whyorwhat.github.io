import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FiGlobe } from "react-icons/fi";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
        setOpen(false);
    };

    return (
        <div
            /* Radicato in basso a destra, ma sopra la safe-area */
            className="fixed right-4 bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)] md:right-6 md:bottom-6 z-50"
        >
            <div className="relative">
                {/* Bottone lingua */}
                <button
                    aria-label="Cambia lingua"
                    onClick={() => setOpen((prev) => !prev)}
                    className="
            flex h-12 w-12 items-center justify-center rounded-full
            bg-black text-white shadow-lg
            active:scale-95 transition
            focus:outline-none focus:ring-2 focus:ring-white
          "
                >
                    <FiGlobe size={24} />
                </button>

                {/* Dropdown sopra il bottone */}
                {open && (
                    <div
                        className="
              absolute bottom-full right-0 mb-3   /* sopra il tasto */
              w-40 rounded-lg bg-black/95 text-white shadow-xl
              ring-1 ring-white/10 backdrop-blur
            "
                    >
                        <button
                            onClick={() => changeLang('en')}
                            className="block w-full px-4 py-2 text-left hover:bg-white/10"
                        >
                            English
                        </button>
                        <button
                            onClick={() => changeLang('it')}
                            className="block w-full px-4 py-2 text-left hover:bg-white/10"
                        >
                            Italiano
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}