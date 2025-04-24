const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

module.exports = {
  title: 'Docs',
  tagline: 'Knowledge base for Skatehive Community',
  url: 'https://docs.skatehive.app',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/skatehive.png',
  organizationName: 'sktbrd',
  projectName: 'skatehive-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br', 'es', 'fr', 'lg'],
    localeConfigs: {
      en: { label: 'English' },
      'pt-br': { label: 'Português (BR)' },
      es: { label: 'Español' },
      fr: { label: 'Français' },
      lg: { label: 'Luganda' },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sktbrd/skatehive-docs/blob/main',
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
  headTags: [
    // {
    //   tagName: 'link',
    //   attributes: {
    //     rel: 'stylesheet',
    //     href: 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
    //   },
    // },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Skatehive Docs - Welcome to the Web3 Skateboarding World. Explore our documentation and ask anything to our AI in any language.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'Skateboarding, Web3, Skatehive, Documentation, AI, Multilingual',
      },
    },
  ],
  themeConfig: {
    navbar: {
      title: 'Docs',
      style: 'dark',
      logo: { alt: 'Skatehive Logo', src: 'img/skatehive.png' },
      items: [
        { type: 'doc', docId: 'README', position: 'left', label: 'Learn' },
        { to: 'https://skatehive.app', label: 'App', position: 'left' },
        {
          type: 'dropdown',
          label: 'Community',
          position: 'left',
          items: [
            { label: 'Discord', href: 'https://discord.gg/skatehive' },
            { label: 'Twitter', href: 'https://twitter.com/skatehive' },
            { label: 'Farcaster', href: 'https://www.nounspace.com/s/skatehive' }
          ],
        },
        { href: 'https://github.com/sktbrd/skatehive-docs/tree/main', label: 'GitHub', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: darkCodeTheme,
      darkTheme: darkCodeTheme,
    },
    customFields: {
      mendableAnonKey: "524a2d83-688b-477a-ba99-05131d06138d",
    },
  },
};
