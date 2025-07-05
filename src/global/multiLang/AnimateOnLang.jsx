// src/global/AnimateOnLang.jsx
import { useTranslation } from "react-i18next";
import { cloneElement } from "react";

/**
 * Rimonta i children ogni volta che cambia la lingua,
 * evitando “mix” di testi/animazioni.
 *
 * @param {string} id – prefisso univoco (es: "home", "whatsapp")
 */
export default function AnimateOnLang({ id, children }) {
    const { i18n } = useTranslation();
    return cloneElement(children, { key: `${id}-${i18n.language}` });
}