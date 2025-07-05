import { useEffect, useState, useRef } from "react";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import ChatHeader from "./ChatHeader";
import { useInView } from "framer-motion";
import {useTranslation} from "react-i18next";

const INITIAL_DELAY = 800;
const TYPING_DELAY = 1000;
const CHAR_MIN_DELAY = 25;
const CHAR_MAX_DELAY = 50;
const PUNCTUATION_DELAY = 250;
const RESTART_DELAY = 2000; // tempo prima di riavviare la chat (ms)

const ChatSimulation = () => {
    const { t } = useTranslation("whatsapp");

    const [pastMessages, setPastMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "50px 0px" }); // ! hook che ci dice se il container è visibile in viewport

    const messages = [
        { sender: "user", text: t("chatSimulation.0") },
        { sender: "bot", text: t("chatSimulation.1") },
        { sender: "user", text: t("chatSimulation.2") },
        { sender: "bot", text: t("chatSimulation.3") },
        { sender: "user", text: t("chatSimulation.4") },
        { sender: "bot", text: t("chatSimulation.5") },
    ];

    // Auto-scroll to latest message
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [pastMessages, currentMessage, isTyping]);

    // Typing simulation: parte SOLO quando entra in viewport
    useEffect(() => {
        if (!isInView) return;
        let isCancelled = false;

        const showNext = async () => {
            if (currentIndex >= messages.length || isCancelled) return;
            const { sender, text } = messages[currentIndex];

            await delay(INITIAL_DELAY);
            if (isCancelled) return;

            if (sender === "bot") {
                setIsTyping(true);
                await delay(TYPING_DELAY);
                setIsTyping(false);
                if (isCancelled) return;
            }

            let built = "";
            setCurrentMessage({ sender, text: built });

            for (let char of text) {
                if (isCancelled) break;
                built += char;
                setCurrentMessage({ sender, text: built });

                let dt = CHAR_MIN_DELAY + Math.random() * (CHAR_MAX_DELAY - CHAR_MIN_DELAY);
                if (/[.,!?]/.test(char)) dt += PUNCTUATION_DELAY;
                await delay(dt);
            }

            if (!isCancelled) {
                setPastMessages((prev) => [...prev, { sender, text: built }]);
                setCurrentMessage(null);
                setCurrentIndex((i) => i + 1);
            }
        };

        showNext();
        return () => {
            isCancelled = true;
        };
    }, [currentIndex, isInView]);

    // Restart chat after all messages shown
    useEffect(() => {
        if (!isInView) return;
        let timer;
        if (currentIndex >= messages.length) {
            timer = setTimeout(() => {
                setPastMessages([]);
                setCurrentIndex(0);
            }, RESTART_DELAY);
        }
        return () => clearTimeout(timer);
    }, [currentIndex, isInView]);

    return (
        <div
            ref={containerRef}
            className="relative bg-[url('/projects/whatsapp/wa_default_bg.jpg')] bg-[length:40%] bg-center rounded-xl shadow-xl w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto select-none">
            {/* Overlay for opacity */}
            <div className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none"></div>

            <div className="relative">
                <ChatHeader />
                <div
                    className="messages-container p-5 md:p-8 flex flex-col
            min-h-[350px] md:min-h-[450px]
            max-h-[500px] md:max-h-[600px]
            overflow-y-auto space-y-3"
                >
                    {pastMessages.map((msg, i) => (
                        <ChatMessage
                            key={`past-${i}`}
                            sender={msg.sender}
                            text={msg.text}
                            disableAnimation={true}
                        />
                    ))}
                    {currentMessage && (
                        <ChatMessage key="current" sender={currentMessage.sender} text={currentMessage.text} />
                    )}
                    {isTyping && <TypingIndicator />}
                </div>
            </div>
        </div>
    );
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default ChatSimulation;