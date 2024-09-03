/* empty css                            */
import { k as createComponent, l as renderTemplate, p as renderComponent, m as maybeRenderHead } from './astro/server_d-PTKQxM.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_Ll-dfY8x.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galarte Web" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col h-screen"> <span>SHOP</span> <a href="/shop/1">1</a> <!-- <Title /> --> <!-- <ArtWorks /> --> </main> ` })}`;
}, "C:/Users/ezequ/Desktop/galarte-web/src/pages/shop/index.astro", void 0);

const $$file = "C:/Users/ezequ/Desktop/galarte-web/src/pages/shop/index.astro";
const $$url = "/shop";

export { $$Index as default, $$file as file, $$url as url };
