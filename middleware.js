// Sends visitors on the old Vercel addresses to getjavo.com, keeping the path.
// (Host-based redirects in vercel.json are not applied on *.vercel.app domains.)
const OLD_HOSTS = new Set(["omni-chat-ia.vercel.app", "omni-landing-sigma.vercel.app"]);

export default function middleware(request) {
  const url = new URL(request.url);
  if (!OLD_HOSTS.has(url.hostname)) return;
  return Response.redirect(`https://getjavo.com${url.pathname}${url.search}`, 308);
}
