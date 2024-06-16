// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

module.exports = {
  title: 'Skatehive Docs',
  tagline: 'Welcome to the Web3 Skateboarding World, ask anything to our AI in any language',
  url: 'https://docs.skatehive.app',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/skatehive.png',
  organizationName: 'sktbrd',
  projectName: 'skatehive-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br', 'es', 'fr'],
    localeConfigs: {
      en: { label: 'English' },
      'pt-br': { label: 'Português (BR)' },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sktbrd/skatehive-docs/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/sktbrd/skatehive-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      { hashed: true },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Skatehive Docs',
      style: 'dark',
      logo: { alt: 'Skatehive Logo', src: 'img/skatehive.png' },
      items: [
        { type: 'doc', docId: 'intro', position: 'left', label: 'Learn' },
        { to: 'https://skatehive.app', label: 'App', position: 'left' },
        {
          type: 'dropdown',
          label: 'Projects',
          position: 'left',
          items: [
            { label: 'Quest for Stoken', href: 'https://www.stoken.quest/' },
            { label: 'Gnars', href: 'https://gnars.wtf' },
            { label: 'Settle or Die', href: 'https://chromewebstore.google.com/detail/settle-or-die/ciabjlofbbflnnjocnbgidbhfnddijpm' },
          ],
        },
        { href: 'https://github.com/sktbrd/skatehive-docs/tree/main', label: 'GitHub', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    customFields: {
      mendableAnonKey: "524a2d83-688b-477a-ba99-05131d06138d",
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: darkCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

