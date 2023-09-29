// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Skatehive Docs',
  tagline: 'Welcome to the Web3 Skateboarding World, ask anything to our AI in any language',
  url: 'https://docs.skatehive.app',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sktbrd', // Usually your GitHub org/user name.
  projectName: 'skatehive-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','pt-br','es','fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sktbrd/skatehive-docs/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sktbrd/skatehive-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Skatehive Docs',
        logo: {
          alt: 'Skatehive Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Learn',
          },
          {
            to: 'https://skatehive.app',
            label: 'App', 
            position: 'left'
          },
          {
            type: 'dropdown',
            label: 'Projects',
            position: 'left', // or 'right'
            items: [
              {
                label: 'Quest for Stoken',
                href: 'https://stoken.quest',
              },
              {
                label: 'PepeSkate',
                href: 'https://pepeskate.vercel.app',
              },
              {
                label: 'Gnars',
                href: 'https://gnars.wtf',
              },
              {
                label: 'Settle or Die',
                href: 'https://chrome.google.com/webstore/detail/settle-or-die/ciabjlofbbflnnjocnbgidbhfnddijpm/related',
              },
            ],
          },
          {
            href: 'https://github.com/sktbrd/skatehive-docs/tree/main/my-website',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'Contribute',
      //           href: 'https://github.com/sktbrd/skatehive-docs',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Built with Weed. Copyright is for l00sers`,
      // },
      customFields:{
        mendableAnonKey: "524a2d83-688b-477a-ba99-05131d06138d",
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,  // Set to true if you want to disable the light/dark switch button
      respectPrefersColorScheme: true,  // Set to true if you want to respect the user's system setting
    },      
    prism: {
      theme: darkCodeTheme,
      darkTheme: darkCodeTheme,
    },
    }),
};

module.exports = config;
