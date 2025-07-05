// src/hooks/usePageMeta.ts / .js
import { useEffect, useRef } from "react";

interface PageMeta {
    title?: string;
    favicon?: string;       // es: "/replyia-favicon.png"
    bustCache?: boolean;    // true → aggiunge ?v=timestamp
}

export default function usePageMeta({ title, favicon, bustCache }: PageMeta) {
    const prevTitle = useRef<string>(document.title);
    const prevHref  = useRef<string | null>(null);

    useEffect(() => {
        /* ---------- TITLE ---------- */
        if (title) document.title = title;

        /* ---------- FAVICON ---------- */
        const head = document.head;
        // cerca un link gestito dal nostro hook
        let link: HTMLLinkElement | null = head.querySelector(
            "link[rel='icon'][data-dynamic='true']"
        );

        // se non c’è, usa il primissimo rel="icon" come base
        if (!link) {
            link =
                head.querySelector("link[rel='icon']") ?? document.createElement("link");
            link.setAttribute("rel", "icon");
            link.setAttribute("data-dynamic", "true");
            head.prepend(link); // lo mettiamo in cima!
        }

        // salva href precedente solo la prima volta
        if (prevHref.current === null) {
            prevHref.current = link.getAttribute("href") ?? "";
        }

        if (favicon) {
            const finalHref = bustCache
                ? `${favicon}${favicon.includes("?") ? "&" : "?"}v=${Date.now()}`
                : favicon;
            link.setAttribute("href", finalHref);
        }

        /* ---------- CLEAN-UP ---------- */
        return () => {
            document.title = prevTitle.current;
            if (prevHref.current !== null) {
                link!.setAttribute("href", prevHref.current);
            }
        };
    }, [title, favicon, bustCache]);
}