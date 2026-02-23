const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */

module.exports = {
  title: "Docs",
  tagline: "Knowledge base for Skatehive Community",
  url: "https://docs.skatehive.app",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/skatehive.png",
  organizationName: "sktbrd",
  projectName: "skatehive-docs",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br", "es", "fr", "lg"],
    localeConfigs: {
      en: { label: "English" },
      "pt-br": { label: "Português (BR)" },
      es: { label: "Español" },
      fr: { label: "Français" },
      lg: { label: "Luganda" },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/sktbrd/skatehive-docs/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
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
      tagName: "meta",
      attributes: {
        name: "description",
        content:
          "Skatehive Docs - Welcome to the Web3 Skateboarding World. Explore our documentation and ask anything to our AI in any language.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "Skateboarding, Web3, Skatehive, Documentation, AI, Multilingual",
      },
    },
    // Open Graph meta tags
    {
      tagName: "meta",
      attributes: {
        property: "og:title",
        content: "Skatehive Docs - Web3 Skateboarding Knowledge Base",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:description",
        content:
          "Welcome to the Web3 Skateboarding World. Explore our documentation and ask anything to our AI in any language.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image",
        content: "https://ipfs.skatehive.app/ipfs/QmePbuFW6b86qDRbKXqpTr5rU8HKF6VRpboxiy9JH3Eujb",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image:alt",
        content: "Skatehive - Web3 Skateboarding Community",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:type",
        content: "website",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:url",
        content: "https://docs.skatehive.app",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:site_name",
        content: "Skatehive Docs",
      },
    },
    // Twitter Card meta tags
    {
      tagName: "meta",
      attributes: {
        name: "twitter:card",
        content: "summary_large_image",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:site",
        content: "@skatehive",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:title",
        content: "Skatehive Docs - Web3 Skateboarding Knowledge Base",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:description",
        content:
          "Welcome to the Web3 Skateboarding World. Explore our documentation and ask anything to our AI in any language.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:image",
        content: "https://ipfs.skatehive.app/ipfs/QmePbuFW6b86qDRbKXqpTr5rU8HKF6VRpboxiy9JH3Eujb",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:image:alt",
        content: "Skatehive - Web3 Skateboarding Community",
      },
    },
  ],
  plugins: [
    [
      'docusaurus-plugin-llms',
      {
        generateLLMsTxt: true,
        generateLLMsFullTxt: true,
        excludeImports: true,
        removeDuplicateHeadings: true,
        includeOrder: [
          'docs/README.md',
          'docs/create-account.mdx',
          'docs/Get Started/',
          'docs/Features/',
          'docs/Advance/',
          'docs/Devs/',
        ],
        customLLMFiles: [
          {
            filename: 'llms-onboarding.txt',
            includePatterns: [
              'docs/README.md',
              'docs/create-account.mdx',
              'docs/Get Started/**'
            ],
            fullContent: true,
            title: 'Skatehive Onboarding Guide',
            description: 'Complete guide for new users: account creation, login, mobile app, and getting started with posting.',
          },
          {
            filename: 'llms-features.txt',
            includePatterns: ['docs/Features/**'],
            fullContent: true,
            title: 'Skatehive Platform Features',
            description: 'Documentation for wallet, spot map, leaderboard, airdrop, video upload, bounties, and DAO governance.',
          },
          {
            filename: 'llms-developers.txt',
            includePatterns: ['docs/Devs/**', 'docs/Advance/**'],
            fullContent: true,
            title: 'Skatehive Developer Documentation',
            description: 'Technical documentation for developers: forking Skatehive, app features, Hive management, witness setup, curation trails, and Zora integration.',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Docs',
      style: 'dark',
      logo: { alt: 'Skatehive Logo', src: 'img/skatehive.png' },
      items: [
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
      defaultMode: "light",
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
