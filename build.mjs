import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const client = join(root, "dist", "client");
const server = join(root, "dist", "server");

await rm(join(root, "dist"), { recursive: true, force: true });
await mkdir(client, { recursive: true });
await mkdir(server, { recursive: true });

for (const path of [
  "index.html",
  "work.html",
  "about.html",
  "contact.html",
  "404.html",
  "styles.css",
  "favicon.svg",
  "robots.txt",
  "_headers",
  "netlify.toml",
  "assets",
  "projects",
  ".openai"
]) {
  await cp(join(root, path), join(client, path), { recursive: true });
}

await writeFile(
  join(server, "index.js"),
  `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return response;
    }

    if (!url.pathname.includes(".")) {
      const htmlUrl = new URL(request.url);
      htmlUrl.pathname = url.pathname.endsWith("/")
        ? url.pathname + "index.html"
        : url.pathname + ".html";

      const htmlResponse = await env.ASSETS.fetch(new Request(htmlUrl, request));
      if (htmlResponse.status !== 404) {
        return htmlResponse;
      }
    }

    const notFoundUrl = new URL(request.url);
    notFoundUrl.pathname = "/404.html";
    const notFound = await env.ASSETS.fetch(new Request(notFoundUrl, request));
    return new Response(notFound.body, {
      status: 404,
      headers: notFound.headers
    });
  }
};
`,
  "utf8"
);
