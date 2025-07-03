import { FaArrowLeft } from 'react-icons/fa';
import FancyButton from '@/components/elements/FancyButton.jsx';

export default function WhatsappView() {
    return (
        <main className="flex-grow flex items-center justify-center px-4 py-12">
            <div className="bg-white border border-gray-300 shadow-lg p-6 rounded-lg max-w-lg w-full text-center">
                <h1 className="text-3xl font-bold mb-3">WhatsApp Support Chatbot</h1>
                <p className="text-gray-500 mb-6">
                    The presentation page of the project is currently under development. Check back soon!
                </p>
                <FancyButton
                    icon={FaArrowLeft}
                    text="Back to other projects"
                    to="/projects"
                    color="#2563eb"
                />
            </div>
        </main>
    );
}
