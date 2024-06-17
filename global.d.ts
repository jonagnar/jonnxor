import is from './messages/is.json';

type Messages = typeof is;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
