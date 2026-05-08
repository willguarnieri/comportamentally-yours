/**
 * Cloudflare Worker — Security Headers
 * Intercepta todas as respostas e adiciona cabeçalhos de segurança HTTP.
 */
export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    const newHeaders = new Headers(response.headers);

    // Força HTTPS por 1 ano e inclui subdomínios
    newHeaders.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload"
    );

    // Impede que o browser "adivinhe" o tipo MIME (evita MIME sniffing attacks)
    newHeaders.set("X-Content-Type-Options", "nosniff");

    // Impede que o site seja embutido em iframes (clickjacking)
    newHeaders.set("X-Frame-Options", "DENY");

    // Controla as informações de referência enviadas em requisições
    newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");

    // Desativa recursos sensíveis do browser que não são usados no site
    newHeaders.set(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()"
    );

    // Content Security Policy — define quais origens são confiáveis
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://wa.me https://api.whatsapp.com",
      "media-src 'none'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; ");
    newHeaders.set("Content-Security-Policy", csp);

    // Remove cabeçalhos que expõem informações do servidor
    newHeaders.delete("X-Powered-By");
    newHeaders.delete("Server");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
