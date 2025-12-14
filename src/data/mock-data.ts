import { Brand, DashboardSnapshot, AuditReport } from '@/lib/types';

// 1. Mock Brands (Required for DashboardHeader)
export const MOCK_BRANDS: Brand[] = [
  { id: 'b1', name: 'Acme Corp', domain: 'acme.com', logoUrl: '/logos/acme.png' },
  { id: 'b2', name: 'TechFlow', domain: 'techflow.io', logoUrl: '/logos/techflow.png' },
];

// 2. Mock Snapshot (Required for Dashboard Home)
export const MOCK_SNAPSHOT: DashboardSnapshot = {
  aiVisibilityScore: 85,
  trustScore: 92,
  nonBrandedCoverage: 45,
  lastAudit: '2023-10-27T10:00:00Z',
};

// 3. Full Audit Report (Required for /app/audit)
export const FULL_AUDIT_REPORT: AuditReport = {
  brandId: 'b1',
  timestamp: '2023-12-14T10:00:00Z',
  modules: [
    {
      id: 'm1',
      name: 'LLM Crawlability',
      score: 45,
      status: 'critical',
      insights: [
        { id: 'i1', title: 'Robots.txt Blocking', description: 'GPTBot and CCBot are disallowed in robots.txt.', severity: 'critical' },
        { id: 'i2', title: 'Sitemap Accessibility', description: 'Sitemap is accessible but lacks lastmod tags.', severity: 'warning' }
      ],
      recommendations: ['Remove "Disallow: /" for GPTBot', 'Add lastmod dates to sitemap.xml']
    },
    {
      id: 'm2',
      name: 'Content Context Window',
      score: 88,
      status: 'pass',
      insights: [
        { id: 'i3', title: 'Token Efficiency', description: 'Main content fits well within standard 4k token windows.', severity: 'pass' }
      ],
      recommendations: ['Maintain current paragraph density']
    },
    {
      id: 'm3',
      name: 'Entity Authority',
      score: 72,
      status: 'warning',
      insights: [
        { id: 'i4', title: 'Knowledge Graph Gap', description: 'Brand entity not found in Google Knowledge Graph.', severity: 'warning' }
      ],
      recommendations: ['Add Schema.org/Organization markup']
    },
    {
      id: 'm4',
      name: 'Citation Flow',
      score: 95,
      status: 'pass',
      insights: [{ id: 'i5', title: 'High Backlink Quality', description: 'Strong references from Tier 1 tech news.', severity: 'pass' }],
      recommendations: []
    },
    {
      id: 'm5',
      name: 'Factuality & Hallucination',
      score: 60,
      status: 'warning',
      insights: [{ id: 'i6', title: 'Ambiguous Claims', description: 'Product pricing page has conflicting data.', severity: 'warning' }],
      recommendations: ['Unify pricing data sources']
    },
    {
      id: 'm6',
      name: 'Sentiment Analysis',
      score: 82,
      status: 'pass',
      insights: [{ id: 'i7', title: 'Positive Sentiment', description: 'Reddit discussions lean 80% positive.', severity: 'pass' }],
      recommendations: []
    },
    {
      id: 'm7',
      name: 'Competitor Share',
      score: 30,
      status: 'critical',
      insights: [{ id: 'i8', title: 'Voice Share Low', description: 'Competitor X appears in 70% of comparison queries.', severity: 'critical' }],
      recommendations: ['Create "Alternative to X" comparison pages']
    }
  ]
};