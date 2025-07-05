import {t} from "i18next";
import {useTranslation} from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation('whatsapp');

    return (
        <section className="relative bg-white py-28 min-h-screen px-6 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
                {/* Colonna sinistra (70%) */}
                <div className="w-full md:w-[80%] text-left">
                    <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-600">
                            {t('hero.title-1')}
                        </span>
                        <br/>
                        <span className="text-black block md:inline text-5xl md:text-8xl">{t('hero.title-2')}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-800 mb-10 max-w-xl">
                        {t('hero.subtitle')}
                    </p>
                </div>

                {/* Colonna destra (30%) */}
                <div className="hidden md:block w-[20%]">
                    {/* Lascia vuoto o inserisci un'immagine */}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;