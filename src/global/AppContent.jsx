import { Routes, Route } from "react-router-dom";
import HomeView from "@/views/HomeView.jsx";
import Footer from "@/global/Footer.jsx";
import Navbar from "@/global/Navbar.jsx";
import AboutMeView from "@/views/AboutMeView.jsx";
import ProjectsView from "@/views/ProjectsView.jsx";
import ContactsView from "@/views/ContactsView.jsx";
import TiSeguoView from "@/views/projects/TiSeguoView.jsx";
import CustomerRadarView from "@/views/projects/CustomerRadarView.jsx";
import WhatsappView from "@/views/projects/WhatsappView.jsx";

export default function AppContent() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            <Navbar />

            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/me" element={<AboutMeView />} />
                    <Route path="/projects" element={<ProjectsView />} />
                    <Route path="/contacts" element={<ContactsView />} />
                    <Route path="/ti-seguo" element={<TiSeguoView />} />
                    <Route path="/customer-radar" element={<CustomerRadarView />} />
                    <Route path="/whatsapp-chatbot" element={<WhatsappView />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}