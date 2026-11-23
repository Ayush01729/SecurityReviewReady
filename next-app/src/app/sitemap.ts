import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://securityreviewready.com";
  const currentDate = new Date().toISOString();

  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/security`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/security-questionnaire-automation`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/best-security-questionnaire-automation-software`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/ai-agents-for-security-questionnaires`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    {
      url: `${baseUrl}/resources/security-questionnaire-examples`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    {
      url: `${baseUrl}/resources/vendor-security-questionnaire-guide`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/resources/caiq-v4-guide`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/resources/sig-vs-sig-lite`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/resources/how-to-answer-security-questionnaires-fast`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/conveyor-alternative`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/whistic-alternative`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/panorays-alternative`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/wolfia-alternative`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/compare/safebase-alternative`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/vanta-questionnaire-alternative`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/resources/ddq-automation`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    {
      url: `${baseUrl}/resources/vendor-risk-questionnaire`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    {
      url: `${baseUrl}/resources/vciso-security-questionnaire-automation`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/compare/conveyor-vs-safebase`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/compare/hypercomply-alternative`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/compare/security-questionnaire-software-pricing`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compare/panorays-vs-riskiq`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/templates/vendor-security-questionnaire-excel`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    {
      url: `${baseUrl}/resources/templates/caiq-v4-excel-template`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    {
      url: `${baseUrl}/resources/templates/sig-lite-questionnaire-spreadsheet`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    {
      url: `${baseUrl}/solutions/vciso-questionnaire-workspace`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    },
    {
      url: `${baseUrl}/resources/vciso-multi-client-security-workflow`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    {
      url: `${baseUrl}/resources/how-vcisos-handle-vendor-questionnaires`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    {
      url: `${baseUrl}/solutions/sales-engineering-security-reviews`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  return routes;
}
