import { motion } from "framer-motion";

const TypingIndicator = () => (
    <div className="flex gap-2 px-4 py-2 bg-[#EDEDED] rounded-xl w-auto self-start shadow">
        <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    className="w-2 h-2 bg-gray-500 rounded-full"
                    animate={{
                        y: ["0%", "-50%", "0%"],
                    }}
                    transition={{
                        delay: i * 0.15,
                        repeat: Infinity,
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    </div>
);

export default TypingIndicator;