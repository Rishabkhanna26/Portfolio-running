module.exports = {
  siteUrl: 'https://rishabkhanna26.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/_next/*', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*']
      }
    ]
  },
  transform: async (config, path) => {
    const priorityMap = {
      '/': 1.0,
      '/services': 0.9,
      '/services/whatsapp-automation': 0.9,
      '/services/ai-chatbots': 0.9,
      '/services/lead-generation': 0.9,
      '/automation-product': 0.8,
      '/about': 0.7,
      '/contact': 0.8
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: priorityMap[path] ?? 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined
    };
  }
}
