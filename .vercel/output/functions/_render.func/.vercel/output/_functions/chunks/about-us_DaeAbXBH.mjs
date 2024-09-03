/* empty css                            */
import { k as createComponent, l as renderTemplate, p as renderComponent, m as maybeRenderHead } from './astro/server_d-PTKQxM.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_Ll-dfY8x.mjs';

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galarte Web" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col h-screen"> <span>ABOUT US</span> <!-- <Title /> --> <!-- <ArtWorks /> --> </main> ` })}`;
}, "C:/Users/ezequ/Desktop/galarte-web/src/pages/about-us.astro", void 0);

const $$file = "C:/Users/ezequ/Desktop/galarte-web/src/pages/about-us.astro";
const $$url = "/about-us";

export { $$AboutUs as default, $$file as file, $$url as url };
