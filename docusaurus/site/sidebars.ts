import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// The guide pages (our 3 authored docs). Listed manually so the sidebar is stable before the
// OpenAPI reference is generated.
const sidebars: SidebarsConfig = {
  docsSidebar: ['overview', 'endpoints', 'concepts'],

  // After `npm run gen-api-docs`, the OpenAPI plugin writes docs/api/sidebar.ts.
  // Uncomment to wire the generated API Reference sidebar:
  // apiSidebar: require('./docs/api/sidebar.ts'),
};

export default sidebars;
