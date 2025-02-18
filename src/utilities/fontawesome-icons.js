import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faAt,
    faArrowUpRightFromSquare, faDiagramProject, faTerminal, faQuoteLeft,

} from '@fortawesome/free-solid-svg-icons';

import {
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";

library.add(
    faLinkedin,
    faGithub,
    faAt,
    faArrowUpRightFromSquare,
    faDiagramProject,
    faPaperPlane,
    faTerminal,
    faQuoteLeft,
);

export default FontAwesomeIcon;