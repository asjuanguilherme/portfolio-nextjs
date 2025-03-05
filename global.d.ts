/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Translations } from '@/i18n/translations'

declare global {
  interface IntlMessages extends Translations {}
}
