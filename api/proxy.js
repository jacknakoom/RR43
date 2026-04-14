export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  const targetUrl = `http://213.176.94.55${url.pathname}${url.search}`;
  
  return fetch(targetUrl, {
    method: req.method,
    headers: req.headers,
    body: req.body,
  });
}
