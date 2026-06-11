import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],      // اللغات المتاحة
  defaultLocale: 'en'        // اللغة الافتراضية
});
