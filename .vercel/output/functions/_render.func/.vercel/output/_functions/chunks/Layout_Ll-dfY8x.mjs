import { k as createComponent, l as renderTemplate, m as maybeRenderHead, p as renderComponent, q as renderHead, t as renderSlot, o as createAstro } from './astro/server_d-PTKQxM.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                            */

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/"> <img src="/images/logo_galarte.png" alt="logo oficial de galarte" class="w-48"> </a>`;
}, "C:/Users/ezequ/Desktop/galarte-web/src/components/Logo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="border-b-2 border-black w-full flex justify-between items-center box-border p-4 z-10" data-astro-cid-3ef6ksr2> <section class="flex w-1/3" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <h1 data-astro-cid-3ef6ksr2>My Blog</h1> ` })} </section> <nav class="flex box-border pr-8 gap-2 w-1/3 justify-center" data-astro-cid-3ef6ksr2> <a href="/artists" data-astro-cid-3ef6ksr2>artistas</a> <a href="/shop" data-astro-cid-3ef6ksr2>tienda</a> <a href="/about-us" data-astro-cid-3ef6ksr2>quiénes somos</a> </nav> <section class="flex gap-4 w-1/3 justify-end" data-astro-cid-3ef6ksr2> <img src="/icons/search.png" alt="search icon" class="w-7 h-7 transform: scale-x-[-1]" data-astro-cid-3ef6ksr2> <img src="/icons/shopping_bag.png" alt="search icon" class="w-7 h-7" data-astro-cid-3ef6ksr2> </section> </header> `;
}, "C:/Users/ezequ/Desktop/galarte-web/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Bienvenido a la web oficial de Galarte."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body class="flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/ezequ/Desktop/galarte-web/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
