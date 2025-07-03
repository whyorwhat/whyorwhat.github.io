import GradientText from "@/components/home/GradientText.jsx";

export default function HeaderHome() {
    return (
        <header className="flex flex-col items-center justify-center text-center py-12 px-4">
            <GradientText
                colors={["#ADD8E6", "#87CEEB", "#6495ED", "#4169E1", "#1E90FF"]}
                animationSpeed={8}
                showBorder={false}
                className="text-8xl font-semibold mt-4"
            >
                Ciao!
            </GradientText>

            <GradientText
                colors={["#00BFFF", "#1E90FF", "#4169E1", "#0000FF"]}
                animationSpeed={8}
                showBorder={false}
                className="text-3xl font-light tracking-wide opacity-90 mt-4"
            >
                It’s Simone Cotardo.
            </GradientText>
        </header>
    );
}