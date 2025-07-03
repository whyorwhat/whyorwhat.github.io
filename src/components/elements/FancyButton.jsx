import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
/*
* Credits to: https://uiverse.io/cssbuttons-io/evil-monkey-41
* */

export default function FancyButton({
                                        icon: Icon,
                                        text,
                                        to = "#",
                                        href,
                                        color = "#2563eb", // default: Tailwind blue-600
                                    }) {
    // Decide wrapper: <a> for href, <Link> otherwise
    const Wrapper = href ? "a" : Link;
    const wrapperProps = href
        ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined }
        : { to };

    return (
        <StyledWrapper color={color}>
            <Wrapper className="button-link" {...wrapperProps}>
                <button>
                    <span className="shadow" />
                    <span className="edge" />
                    <span className="front text">
            {Icon && <Icon className="mr-2 inline-block" />}
                        {text}
          </span>
                </button>
            </Wrapper>
        </StyledWrapper>
    );
}

// Darken/Lighten helpers
function adjustColor(hex, amount) {
    let col = hex.startsWith("#") ? hex.slice(1) : hex;
    if (col.length === 3) {
        col = col.split("").map((c) => c + c).join("");
    }
    const num = parseInt(col, 16);
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00ff) + amount;
    let b = (num & 0x0000ff) + amount;

    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    return `rgb(${r}, ${g}, ${b})`;
}

const StyledWrapper = styled.div`
    .button-link {
        display: inline-block;
    }

    button {
        position: relative;
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
        outline-offset: 4px;
        transition: filter 250ms;
        user-select: none;
        touch-action: manipulation;
    }

    .shadow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background: hsl(0deg 0% 0% / 0.25);
        transform: translateY(2px);
        transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    }

    .edge {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background: ${({ color }) => `
    linear-gradient(
      to left,
      ${adjustColor(color, -80)} 0%,
      ${adjustColor(color, -15)} 8%,
      ${adjustColor(color, -15)} 92%,
      ${adjustColor(color, -80)} 100%
    )
  `};
    }

    .front {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        position: relative;
        padding: 12px 27px;
        border-radius: 12px;
        font-size: 1.1rem;
        color: white;
        background-color: ${({ color }) => color};
        transform: translateY(-4px);
        transition: all 200ms cubic-bezier(0.3, 0.7, 0.4, 1);
    }

    button:hover .front {
        background-color: ${({ color }) => adjustColor(color, 30)};
        transform: translateY(-6px);
    }

    button:active .front {
        transform: translateY(-2px);
        transition: transform 34ms;
    }

    button:hover .shadow {
        transform: translateY(4px);
        transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    }

    button:active .shadow {
        transform: translateY(1px);
        transition: transform 34ms;
    }

    button:focus:not(:focus-visible) {
        outline: none;
    }
`;