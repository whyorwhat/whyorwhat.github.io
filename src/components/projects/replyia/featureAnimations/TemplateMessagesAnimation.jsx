import React, {useState, useEffect, useRef} from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import {GiArrowCursor} from "react-icons/gi";
import {IoSend} from "react-icons/io5";
import {useTranslation} from "react-i18next";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function TemplateMessagesAnimation() {
    const { t } = useTranslation("whatsapp");
    const contacts = t("templates.contacts", { returnObjects: true });

    const controlsCursor = useAnimation();
    const [contactIdx, setContactIdx] = useState(0);
    const [templateIdx, setTemplateIdx] = useState(-1);
    const [inputValue, setInputValue] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [bubble, setBubble] = useState(null);
    const controlsSend   = useAnimation();

    // Ref per cursore
    const containerRef = useRef(null);
    const chevronRef = useRef(null);
    const optionRefs = useRef([]);
    const sendRef = useRef(null);

    // Ref per bubble messaggio
    const bubbleRef = useRef(null);
    const [maxBubbleHeight, setMaxBubbleHeight] = useState(0);

    // Ogni volta che cambia il bubble, ne misuriamo l'altezza e, se è la più alta finora, aggiorniamo maxBubbleHeight
    useEffect(() => {
        if (bubbleRef.current) {
            const h = bubbleRef.current.scrollHeight;
            if (h > maxBubbleHeight) {
                setMaxBubbleHeight(h);
            }
        }
    }, [bubble, maxBubbleHeight]);

    // funzione helper per muovere il cursore su un elemento
    const moveTo = async (el) => {
        if (!el?.current || !containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const elemRect      = el.current.getBoundingClientRect();

        // calcolo della posizione locale dentro il container
        const x = elemRect.left - containerRect.left + elemRect.width  / 2;
        const y = elemRect.top  - containerRect.top  + elemRect.height / 2;

        await controlsCursor.start({
            x,
            y,
            opacity: 1,
            transition: { duration: 0.5 }
        });
    };

    useEffect(() => {
        // mostra subito il cursore in alto a sinistra
        controlsCursor.set({ x: 0, y: 0, opacity: 1 });
    }, [controlsCursor]);

    useEffect(() => {
        let active = true;
        (async () => {
            while (active) {
                const contact = contacts[contactIdx];
                // 1. scrivi il nome
                setInputValue("");
                for (let i = 0; i < contact.fullName.length; i++) {
                    if (!active) return;
                    setInputValue(contact.fullName.slice(0, i+1));
                    await delay(100);
                }
                await delay(500);

                setTemplateIdx(-1);
                await delay(300);

                // 3. muovi su chevron e apri menu
                await moveTo(chevronRef);
                await controlsCursor.start({ scale: 0.9, transition: { duration: 0.1 } });
                await controlsCursor.start({ scale: 1, transition: { duration: 0.1 } });
                setMenuOpen(true);
                await delay(500);

                // 4–7: scorri le opzioni e invia
                for (let t = 0; t < contact.templates.length; t++) {
                    if (!active) return;
                    // A. Sposto il cursore sull'opzione
                    await moveTo({ current: optionRefs.current[t] });

                    // Click
                    await controlsCursor.start({ scale: 0.9, transition: { duration: 0.1 } });
                    await controlsCursor.start({ scale: 1, transition: { duration: 0.1 } });

                    // B. Piccolissimo delay per evitare flicker
                    await delay(50);

                    // C. Solo ora aggiorno il selectedTemplate
                    setTemplateIdx(t);

                    await delay(300);

                    // D. Sposto il cursore sul bottone Send
                    await moveTo(sendRef);

                    // Click bottone + click cursore
                    await controlsCursor.start({ scale: 0.9, transition: { duration: 0.1 } });
                    await controlsSend.start({ scale: 0.9, transition: { duration: 0.1 } });
                    await controlsCursor.start({ scale: 1, transition: { duration: 0.1 } });
                    await controlsSend.start({ scale: 1,   transition: { duration: 0.1 } });

                    setBubble(contact.templates[t]);
                    await delay(4000);  // Mostra il messaggio 4 secondi

                    setBubble(null);
                    await delay(300);
                }

                setMenuOpen(false);
                await delay(500);
                setContactIdx(i => (i+1) % contacts.length);
                await delay(500);
            }
        })();
        return () => { active = false; };
    }, [contactIdx]);

    // Appena cambio contatto, reset template e bubble
    useEffect(() => {
        setTemplateIdx(-1);
        setBubble(null);
    }, [contactIdx]);

    const currentContact = contacts[contactIdx];
    const selectedTemplate = templateIdx >= 0 ? currentContact.templates[templateIdx] : null;

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-xl mx-auto select-none pointer-events-none"
        >
            {/* Cursor */}
            <motion.div
                className="absolute z-50 w-6 h-10"
                initial={{ opacity: 0 }}
                animate={controlsCursor}
            >
                <GiArrowCursor size={20} className="text-gray-800"/>
            </motion.div>

            {/* Input */}
            <div className="mb-4">
                <label className="block text-xs font-medium text-gray-600">
                    {t("templates.to")}
                </label>
                <input
                    value={inputValue}
                    readOnly
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
            </div>

            {/* Select + send */}
            <div className="flex items-end space-x-2">
                <div className="flex-1">
                    <label className="block text-xs text-gray-600">
                        {t("templates.template")}
                    </label>
                    <div
                        ref={chevronRef}
                        className="mt-1 flex items-center justify-between border rounded-lg px-3 h-10 bg-white"
                    >
                        <motion.span
                          key={selectedTemplate?.id ?? "empty"}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit   ={{ opacity: 0, y:  5 }}
                          transition={{ duration: 0.2 }}
                          className={`text-sm ${selectedTemplate ? "text-gray-800" : "text-gray-400 italic"}`}
                        >
                            {selectedTemplate ? selectedTemplate.title : t("templates.select")}                        </motion.span>
                        <FaChevronDown className="text-gray-500" />
                    </div>
                </div>
                {/* Send button */}
                <motion.div
                    ref={sendRef}
                    className="flex-none text-white bg-blue-400 p-3 rounded-lg h-10"
                    initial={{ scale: 1 }}
                    animate={controlsSend}
                >
                    <IoSend />
                </motion.div>
            </div>

            {/* Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-6 right-12 mt-1 bg-white border rounded-lg shadow z-10"
                    >
                        {currentContact.templates.map((tpl, i) => (
                            <li
                                key={tpl.id}
                                ref={el => optionRefs.current[i] = el}
                                className={`px-3 py-2 text-sm ${i === templateIdx ? "bg-blue-50" : ""}`}
                            >
                                {tpl.title}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>

            {/* Wrapper per il bubble */}
            <div
                className="relative mt-24 overflow-hidden"
                style={{ minHeight: maxBubbleHeight }}
            >
                <AnimatePresence>
                    {bubble && (
                        <motion.div
                            ref={bubbleRef}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="absolute bottom-0 w-full bg-[#C6FFB2] text-gray-900 rounded-br-none rounded-xl p-4 shadow max-h-48 overflow-y-auto whitespace-pre-wrap break-words"
                        >
                            <div className="text-sm font-semibold mb-1">
                                {bubble.title}
                            </div>
                            <div className="text-sm mb-2">
                                {bubble.body}
                            </div>
                            <div className="text-xs italic">
                                {bubble.signature}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}