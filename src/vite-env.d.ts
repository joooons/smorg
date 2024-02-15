/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CONTENTFUL_ACCESS_TOKEN: string;
    // Add more env variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  