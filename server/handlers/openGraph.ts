import env from "../env";

export const render = (link: Link): string => {
  console.log("OIE?");

  const title = link.title.replace('"', "'");
  const description = link.description.replace('"', "'");

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <title>${title}</title>
    <meta name="description" content="${description}" />

    <meta property="og:url" content="https://${env.DEFAULT_DOMAIN}/${link.id}">
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${link.image_url}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="${env.DEFAULT_DOMAIN}">
    <meta property="twitter:url" content="https://${env.DEFAULT_DOMAIN}/${link.id}">  
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${link.image_url}" />
</head>

<body>${title}</body>
</html>`;
};
