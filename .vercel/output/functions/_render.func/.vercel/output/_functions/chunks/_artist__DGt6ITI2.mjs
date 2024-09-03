/* empty css                            */
import { k as createComponent, l as renderTemplate, m as maybeRenderHead, o as createAstro } from './astro/server_d-PTKQxM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$artist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$artist;
  const { artist } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<span> ${artist} </span>`;
}, "C:/Users/ezequ/Desktop/galarte-web/src/pages/artists/[artist].astro", void 0);

const $$file = "C:/Users/ezequ/Desktop/galarte-web/src/pages/artists/[artist].astro";
const $$url = "/artists/[artist]";

export { $$artist as default, $$file as file, $$url as url };
