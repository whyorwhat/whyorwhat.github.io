import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faAt,
    faArrowUpRightFromSquare, faDiagramProject,

} from '@fortawesome/free-solid-svg-icons';

import {
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faLinkedin,
    faGithub,
    faAt,
    faArrowUpRightFromSquare,
    faDiagramProject
);

export default FontAwesomeIcon;