// @ts-check
const config = {
  title: 'MEV-X Homelander',
  tagline: 'Post-swap, atomic MEV internalization for DEXs',
  url: 'https://seoeva.github.io',
  baseUrl: '/testd/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'seoeva',
  projectName: 'testd',
  trailingSlash: true,
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
        },
        blog: false,
        pages: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],
  themeConfig: ({
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
  navbar: {
  title: 'MEV-X Homelander',
  logo: {
    alt: 'MEV-X',
    src: 'img/logo.png',
  },
  items: [
    // 1) Убрали Docs слева (его больше нет)

    // 2) Website вместо GitBook
    { href: 'https://www.mev-x.com/', label: 'Website', position: 'right' },

    // 3) X рядом с сайтом
    { href: 'https://x.com/MEV_X_project', label: 'X', position: 'right' },

    // GitHub оставляем
    { href: 'https://github.com/seoeva/testd', label: 'GitHub', position: 'right' },
  ],
},
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [
          { label: 'Executive Summary', to: '/executive-summary' },
          { label: 'Security Guarantees', to: '/security-guarantees' },
          { label: 'Audit', to: '/audit' },
        ]},
        { title: 'Links', items: [
          { label: 'GitBook', href: 'https://mx0-1.gitbook.io/mev-x-homelander' },
          { label: 'GitHub', href: 'https://github.com/USERNAME/REPO' },
        ]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MEV-X`,
    },
    prism: { additionalLanguages: ['solidity'] },
    docs: { sidebar: { hideable: false } },
  }),
};
module.exports = config;
