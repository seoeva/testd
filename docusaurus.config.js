// @ts-check
const config = {
  title: 'MEV-X Homelander',
  tagline: 'Post-swap, atomic MEV internalization for DEXs',
  url: 'https://USERNAME.github.io',
  baseUrl: '/REPO/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'USERNAME',
  projectName: 'REPO',
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
      logo: { alt: 'MEV-X', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Docs' },
        { href: 'https://mx0-1.gitbook.io/mev-x-homelander', label: 'GitBook', position: 'right' },
        { href: 'https://github.com/USERNAME/REPO', label: 'GitHub', position: 'right' },
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
