export const render = (link: Link): string => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${link.title}</title>
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${link.title}" />
    <meta property="og:url" content="${link.target}" />
    <meta property="og:image" content="${link.image_url}" />
    <meta property="og:description" content="${link.description}" />
    <meta name="twitter:title" content="${link.title} ">
    <meta name="twitter:description" content="${link.description}">
    <meta name="twitter:image" content="${link.image_url}">
    <meta name="twitter:card" content="summary_large_image">
</head>
<body>
    
</body>
</html>
  `;
}
