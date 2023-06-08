/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_DEV_TOOLS: boolean;
  readonly VITE_dfsjk: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
