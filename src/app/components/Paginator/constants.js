import { t } from 'i18next';

import PageJump from './components/PageJump';
import styles from './styles.module.scss';
import ArrowAction from './components/ArrowAction';

export const DEFAULT_CURRENT_PAGE = 1;
export const DEFAULT_TOTAL_PAGES = 1;
export const NEXT = 'next';
export const PREVIOUS = 'previous';

export const ARROW_CLASSNAME = `row middle ${styles.actionsContainer}`;

export const PAGING_COMPONENTS = [
  {
    key: PREVIOUS,
    component: ArrowAction,
    className: ARROW_CLASSNAME,
    text: t('Paginator:previous')
  },
  {
    key: 'pageJump',
    component: PageJump,
    buttonType: false,
    className: styles.actionsContainer
  },
  {
    key: NEXT,
    component: ArrowAction,
    className: ARROW_CLASSNAME,
    text: t('Paginator:next')
  }
];
