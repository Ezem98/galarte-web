/* empty css                            */
import { k as createComponent, l as renderTemplate, m as maybeRenderHead, p as renderComponent } from './astro/server_d-PTKQxM.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_Ll-dfY8x.mjs';
import 'clsx';
/* empty css                         */

const $$Content = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="gallery flex justify-center h-full pt-[2%]" data-astro-cid-kqty5qjk> <article class="panel left border-y-2 border-black flex justify-center h-[87%] gap-12 items-center grow z-10 bg-[#f6f6f6]" data-astro-cid-kqty5qjk> <img src="/images/panel_lateral_1.webp" alt="" class="w-2/5 h-3/4 artwork" data-astro-cid-kqty5qjk> <img src="/images/panel_lateral_2.webp" alt="" class="w-2/5 h-3/4 artwork object-cover" data-astro-cid-kqty5qjk> </article> <article class="flex justify-center items-center w-[65%] h-[87%] border-2 border-black gap-24" data-astro-cid-kqty5qjk> <img src="/images/panel_central_1.webp" alt="" class="w-2/5 h-3/4 artwork" data-astro-cid-kqty5qjk> <img src="/images/panel_central_1.webp" alt="" class="w-2/5 h-3/4 artwork" data-astro-cid-kqty5qjk> <img src="/images/panel_central_1.webp" alt="" class="w-2/5 h-3/4 artwork" data-astro-cid-kqty5qjk> </article> <article class="panel right border-y-2 border-black flex justify-center h-[87%] gap-12 items-center grow z-10 bg-[#f6f6f6]" data-astro-cid-kqty5qjk> <img src="/images/panel_lateral_2.webp" alt="" class="w-2/5 h-3/4 artwork object-cover" data-astro-cid-kqty5qjk> <img src="/images/panel_lateral_1.webp" alt="" class="w-2/5 h-3/4 hover:transform:skew-x-0" data-astro-cid-kqty5qjk> </article> </section> `;
}, "C:/Users/ezequ/Desktop/galarte-web/src/components/Content.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex justify-center gap-8 box-border pb-4" data-astro-cid-sz7xmlte> <section class="flex gap-2 justify-center" data-astro-cid-sz7xmlte> <img src="/icons/instagram.png" alt="search icon" class="w-4 h-4 transform: scale-x-[-1]" data-astro-cid-sz7xmlte> <img src="/icons/mail.png" alt="search icon" class="w-4 h-4" data-astro-cid-sz7xmlte> </section> <span data-astro-cid-sz7xmlte> GALARTE TIENDA DE ARTE © CASI TODOS LOS DERECHOS RESERVADOS.</span> </footer> `;
}, "C:/Users/ezequ/Desktop/galarte-web/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galarte Web" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col h-screen"> ${renderComponent($$result2, "Content", $$Content, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} <!-- <Title /> --> <!-- <ArtWorks /> --> </main> ` })}`;
}, "C:/Users/ezequ/Desktop/galarte-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/ezequ/Desktop/galarte-web/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
