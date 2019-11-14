import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSave,
  faFileImport,
  faDumpster,
  faHandPointRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSave);
library.add(faFileImport);
library.add(faDumpster);
library.add(faHandPointRight);

export default FontAwesomeIcon;
