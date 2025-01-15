/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_WHATSAPP_NUMBER: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
