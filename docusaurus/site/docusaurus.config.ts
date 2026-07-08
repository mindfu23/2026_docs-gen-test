import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// The shared docs hub (the `showcase/` index that links to every doc set). Set this to the
// deployed showcase URL — or pass DOCS_HUB_URL in the build env. (grep token: REPLACE-WITH-HUB-URL)
const DOCS_HUB_URL = process.env.DOCS_HUB_URL ?? 'https://showcase-docs-gen.netlify.app';

const config: Config = {
  title: 'Open5e Docs — Docusaurus',
  tagline: 'The Open5e D&D 5e API, documented with Docusaurus (one of five tools compared).',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://example.com', // set to the Netlify URL once deployed
  baseUrl: '/',

  organizationName: 'mindfu23',
  projectName: '2026_docs-gen-test',

  // 'warn' (not 'throw') so the build succeeds before `gen-api-docs` creates docs/api/*.
  onBrokenLinks: 'warn',

  // i18n seam — en + en-GB. en-GB is the home for the British-voice LoRA variant
  // (run `docusaurus write-translations --locale en-GB` + author i18n/en-GB/ once the LoRA
  // clears the safety screen — see ../../shared/MODEL_LAYER.md).
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'en-GB'],
    localeConfigs: {
      'en': {label: 'English (US voice)'},
      'en-GB': {label: 'English (British voice)'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // docs at the site root
          docItemComponent: '@theme/ApiItem', // required by the OpenAPI theme
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // OpenAPI reference generated from the shared spec. Run `npm run gen-api-docs` to emit
  // docs/api/* from the spec, then build. Swap specPath to compare spec variants
  // (openapi.json / openapi-subset.json / openapi-auth.json) — see PLAN.md "preserve every option".
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          open5e: {
            specPath: '../../shared/openapi-subset.json',
            outputDir: 'docs/api',
            sidebarOptions: {groupPathsBy: 'tag'},
          },
        },
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Open5e Docs',
      logo: {
        alt: 'd20',
        src: 'img/sample-d20.svg',
      },
      items: [
        {href: DOCS_HUB_URL, label: '← Docs Hub', position: 'left'},
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Guides'},
        {type: 'docSidebar', sidebarId: 'apiSidebar', position: 'left', label: 'API Reference'},
        {to: '/chat', label: 'Ask the Docs', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://github.com/mindfu23/2026_docs-gen-test', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Includes material from the D&D 5e SRD (CC-BY-4.0) via the Open5e API. See NOTICE.md.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
