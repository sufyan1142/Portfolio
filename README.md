# M. Sufyan Ali — Portfolio

A simple multi-page product-design portfolio built with plain HTML and CSS. It has no runtime dependencies and is ready for GitHub and Cloudflare Pages.

## Pages

- Home: positioning, selected work, and career impact
- Work: project index and capabilities
- About: profile, experience, education, and languages
- Contact: email, LinkedIn, and résumé
- Three project stories covering Daraz, NETSOL, and design-system work

## Preview and build

Open `index.html` directly for a quick preview.

For a production build:

```text
npm run build
```

The publish directory is `dist/client`.

## Publish with GitHub + Cloudflare Pages

1. Create a GitHub repository and push this folder.
2. In Cloudflare, choose **Workers & Pages → Create → Pages → Connect to Git**.
3. Choose the GitHub repository.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist/client`.
6. After deployment, add `sufyanali.pk` under **Custom domains**.
7. Enable **Web Analytics** in the Cloudflare dashboard; Cloudflare can add the beacon without changing the site files.

If the domain is registered outside Cloudflare, Cloudflare will show the exact DNS record required. If it is registered with Cloudflare, the DNS record is created automatically.

## Public details

- Email: Sufyan1142@gmail.com
- LinkedIn: https://www.linkedin.com/in/muhammadsufyanali/
- Canonical domain: https://sufyanali.pk
