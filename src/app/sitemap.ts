import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://helpdesk.linux-aios.com'
  
  const routes = [
    '',
    '/about',
    '/airport-travel-rules-saudi',
    '/best-cities-expats-saudi',
    '/calculator',
    '/child-vaccination-rules-saudi',
    '/community-chat',
    '/dependent-iqama-guide',
    '/domestic-tourism-saudi',
    '/end-of-service-saudi-calculator',
    '/exit-reentry-visa-saudi',
    '/expat-community-centers-saudi',
    '/family-visit-visa-saudi',
    '/gcc-travel-guide-saudi',
    '/healthcare-guide-saudi',
    '/iqama-renewal-guide',
    '/islamic-holidays-saudi',
    '/jobs',
    '/labor-complaints-saudi-arabia',
    '/labor-office',
    '/leave-rules-saudi-arabia',
    '/mosque-etiquette-saudi',
    '/national-address-spl-saudi',
    '/news',
    '/nursery-daycare-guide-saudi',
    '/part-time-jobs-saudi',
    '/permanent-family-visa-saudi',
    '/prayer-timings-saudi-arabia',
    '/public-holidays-saudi',
    '/ramadan-rules-saudi-arabia',
    '/resources',
    '/salary-certificate-download',
    '/saudi-tourism-visa-guide',
    '/saudi-workers-guide',
    '/schooling-expat-children-saudi',
    '/sim-cards-iqama-check',
    '/sponsor-transfer-status-saudi',
    '/tools',
    '/umrah-guide-saudi-residents',
    '/university-admissions-saudi',
    '/weekend-destinations-saudi',
    '/work-permits-saudi-arabia',
    '/worker-rights-saudi-law',
  ]

  return routes.map((route) => {
    let priority = 0.7
    let changeFrequency: 'daily' | 'weekly' | 'monthly' | 'always' | 'hourly' | 'yearly' | 'never' = 'weekly'

    if (route === '') {
      priority = 1.0
      changeFrequency = 'daily'
    } else if (route === '/news' || route === '/jobs' || route === '/community-chat') {
      priority = 0.9
      changeFrequency = 'daily'
    } else if (route === '/about' || route === '/resources') {
      priority = 0.5
      changeFrequency = 'monthly'
    } else if (route.includes('calculator') || route === '/tools') {
      priority = 0.7
      changeFrequency = 'monthly'
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }
  })
}

