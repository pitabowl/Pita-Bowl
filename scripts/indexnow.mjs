/**
 * Tell Bing (and other IndexNow engines) about every URL in the live sitemap.
 * Run after a deploy that adds or changes pages:  node scripts/indexnow.mjs
 */
const HOST = "www.thepitabowl.com";
const KEY = "78d9f10691f03f00ec3f628815ec29db"; // served at /<KEY>.txt from public/

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`);
