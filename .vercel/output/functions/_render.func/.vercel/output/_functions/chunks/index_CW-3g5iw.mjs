/* empty css                            */
import { k as createComponent, l as renderTemplate, p as renderComponent, m as maybeRenderHead } from './astro/server_d-PTKQxM.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_Ll-dfY8x.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galarte Web" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col h-screen"> <span>ARTISTAS</span> <!-- <Title /> --> <!-- <ArtWorks /> --> </main> ` })}`;
}, "C:/Users/ezequ/Desktop/galarte-web/src/pages/artists/index.astro", void 0);

const $$file = "C:/Users/ezequ/Desktop/galarte-web/src/pages/artists/index.astro";
const $$url = "/artists";

export { $$Index as default, $$file as file, $$url as url };
