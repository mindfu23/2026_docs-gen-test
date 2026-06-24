import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// The guide pages (our 3 authored docs). Listed manually so the sidebar is stable before the
// OpenAPI reference is generated.
const sidebars: SidebarsConfig = {
  docsSidebar: ['overview', 'endpoints', 'concepts'],

  // The OpenAPI plugin generates docs/api/sidebar.ts (via `gen-api-docs`, which the build
  // script runs). NOTE: `docs/api/` is gitignored + generated, so run `npm run gen-api-docs`
  // once before `npm start` (a fresh tree without it will fail this require).
  apiSidebar: require('./docs/api/sidebar.ts'),
};

export default sidebars;
