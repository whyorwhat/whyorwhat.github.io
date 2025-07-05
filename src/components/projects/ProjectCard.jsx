import {FaGithub, FaProjectDiagram} from "react-icons/fa";
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import {TechnologiesIcons} from "@/components/projects/TechnologiesIcons.jsx";
import WindowCard from "@/components/elements/WindowCard.jsx";
import {useNavigate} from "react-router-dom";

export function ProjectCard({
                                id,
                                title,
                                description,
                                viewLink,
                                githubLink
                                , technologies,
                                delay = 0 }) {
    const navigate = useNavigate();
    const handleView = (url) => {
        if (url.startsWith('/')) {
            navigate(url);
        } else {
            window.open(url, '_blank', 'noopener');
        }
    };

    return (
        <WindowCard
            delay={delay}
            className="flex flex-col p-6 gap-5 min-h-[300px] w-full max-w-3xl overflow-hidden rounded-lg"
        >
            {/* Wrapper flessibile che contiene contenuto + immagine desktop */}
            <div className="flex flex-col md:flex-row flex-grow">
                {/* Contenuto principale */}
                <div className="flex-grow md:pr-6">
                    <h3 className="text-xl font-extrabold text-gray-800 mb-4">{title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{description}</p>

                    <div
                        className="flex flex-col md:flex-row text-xs text-gray-500 mb-4
                            items-start md:items-center"
                    >
                        <span className="mb-1 md:mb-0 md:mr-2">Made&nbsp;with:</span>
                        <TechnologiesIcons technologies={technologies} />
                    </div>

                    <div className="flex flex-wrap gap-3 mt-2">
                        {viewLink && (
                            <button
                                type="button"
                                onClick={() => handleView(viewLink)}
                                className="flex items-center justify-center px-4 py-2 text-xs font-semibold bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 hover:shadow-md transition duration-200"
                            >
                                <FaArrowUpRightFromSquare className="inline-block mr-2" /> View
                            </button>
                        )}
                        {githubLink && (
                            <button
                                type="button"
                                onClick={() => window.open(githubLink, '_blank', 'noopener')}
                                className="flex items-center justify-center px-4 py-2 text-xs font-semibold bg-gray-200 text-gray-800 rounded-lg shadow-sm hover:bg-gray-300 hover:shadow-md transition duration-200"
                            >
                                <FaGithub className="inline-block mr-2" /> GitHub
                            </button>
                        )}
                    </div>
                </div>

                {/* Immagine desktop, inside il flow di md:flex-row */}
                <img
                    src={`/images/projects/${id}.png`}
                    alt={title}
                    className="hidden md:block md:w-1/3 lg:w-[30%] object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Immagine mobile, fuori dal wrapper flex */}
            <img
                src={`/images/projects/${id}.png`}
                alt={title}
                className="block md:hidden w-full mt-4 rounded-lg shadow-md"
            />
        </WindowCard>
    );
}