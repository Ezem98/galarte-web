/* empty css                            */
import { k as createComponent, l as renderTemplate, m as maybeRenderHead, o as createAstro } from './astro/server_d-PTKQxM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$item = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$item;
  const { item } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<span> ${item} </span>`;
}, "C:/Users/ezequ/Desktop/galarte-web/src/pages/shop/[item].astro", void 0);

const $$file = "C:/Users/ezequ/Desktop/galarte-web/src/pages/shop/[item].astro";
const $$url = "/shop/[item]";

export { $$item as default, $$file as file, $$url as url };
