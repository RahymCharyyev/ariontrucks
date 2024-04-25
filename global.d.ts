import ru from './messages/ru.json';
import az from './messages/az.json';

type Messages = typeof ru;
type Messages = typeof az;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
