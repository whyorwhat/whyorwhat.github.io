import { FaQuoteLeft, FaTerminal, FaPaperPlane } from "react-icons/fa";
import HeaderHome from "@/components/home/HeaderHome.jsx";
import FancyButton from "@/components/elements/FancyButton.jsx";

export default function HomeView() {
    return (
        <main className="flex-grow flex flex-col items-center justify-start">

            <HeaderHome />

            <div className="mt-24 flex flex-wrap justify-center gap-6 px-4">

                <FancyButton
                    to="/me"
                    icon={FaQuoteLeft}
                    text="About Me"
                    color="#366EF0" // Tailwind blue-600
                />

                <FancyButton
                    to="/projects"
                    icon={FaTerminal}
                    text="Projects"
                    color="#255AC8" // Tailwind green-600
                />

                <FancyButton
                    to="/contacts"
                    icon={FaPaperPlane}
                    text="Contact"
                    color="#1C4A9E" // Tailwind purple-600
                />
            </div>
        </main>
    );
}