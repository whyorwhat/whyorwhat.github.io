// ChatMessage.jsx
import { motion } from "framer-motion";

const ChatMessage = ({ sender, text, disableAnimation = false }) => {
    const isUser = sender === "user";

    return (
        <motion.div
            initial={disableAnimation ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                // oppure personalizza qui il tipo di easing o spring
                duration: 0.3,
                type: disableAnimation ? undefined : 'spring',
                stiffness: disableAnimation ? undefined : 300,
                damping: disableAnimation ? undefined : 30,
            }}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
        >
            <div
                className={`px-4 py-2 rounded-xl max-w-[70%] lg:max-w-[60%] 
                    text-base
                    lg:text-lg
                    shadow
                    text-gray-900
                    ${isUser 
                        ? "bg-[#C6FFB2] rounded-br-none"
                        : "bg-gray-50 rounded-bl-none"
                    }`}
            >
                {text}
            </div>
        </motion.div>
    );
};

export default ChatMessage;