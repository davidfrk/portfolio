function imageRouter(url) {
  const fullUrl = window.location.href;
  console.log("Path:", fullUrl);
  if (fullUrl.includes("github") && !url.includes("/portfolio/")) {
    return `/portfolio${url}`
  }
  return url;
}

export { imageRouter };