import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import favicon from "lume/plugins/favicon.ts";
import feed from "lume/plugins/feed.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sitemap from "lume/plugins/sitemap.ts";
import postcss from "lume/plugins/postcss.ts";
import date from "lume/plugins/date.ts";
import nav from "lume/plugins/nav.ts";
import pagefind from "lume/plugins/pagefind.ts";

import lang_csharp from "npm:highlight.js/lib/languages/csharp";

const site = lume();

site.copy("assets");
site.data("navLinks", [{
  href: '/',
  text: 'Home',
  icon: 'home',
}, {
  href: '/about-me',
  text: 'About',
  icon: 'about',
}]);

site.use(nav());
site.use(date());
site.use(code_highlight({
  languages: {
      csharp: lang_csharp,
    },
}));
// site.use(favicon());
site.use(feed());
site.use(jsx());
site.use(tailwindcss({

}));
site.use(pagefind({
  ui: {
    resetStyles: true,
  }
}));
site.use(sitemap());
site.use(postcss());

export default site;
