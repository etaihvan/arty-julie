import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";

export { routes, notFoundMeta, metaFor } from "./content/routes";
export { site } from "./content/site";
export { camps } from "./content/camps";
export { kidsClasses, teenClasses, adultClasses } from "./content/programs";
export { kidsFaqs, campFaqs, adultFaqs } from "./content/faqs";

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
