import { Brand, DashboardSnapshot, AuditReport } from '@/lib/types';

// ============================================================================
// 1. MOCK BRANDS
// ============================================================================
export const MOCK_BRANDS: Brand[] = [
  { 
    id: 'b1', 
    name: 'Acme Corp', 
    domain: 'acme.com', 
    logoUrl: '/logos/acme.png' // You can use placeholders if images don't exist
  },
  { 
    id: 'b2', 
    name: 'TechFlow', 
    domain: 'techflow.io', 
    logoUrl: '/logos/techflow.png' 
  },
  { 
    id: 'b3', 
    name: 'Lumina Health', 
    domain: 'lumina.health', 
    logoUrl: '/logos/lumina.png' 
  },
  { 
    id: 'b4', 
    name: 'Apex FinTech', 
    domain: 'apex-fin.com', 
    logoUrl: '/logos/apex.png' 
  }
];

// ============================================================================
// 2. DASHBOARD SNAPSHOTS (Keyed by Brand ID)
// ============================================================================
export const MOCK_SNAPSHOTS: Record<string, DashboardSnapshot> = {
  'b1': { // Acme Corp: Good all-rounder
    aiVisibilityScore: 85,
    trustScore: 92,
    nonBrandedCoverage: 45,
    lastAudit: '2023-12-14T10:00:00Z',
  },
  'b2': { // TechFlow: Struggling with visibility
    aiVisibilityScore: 42,
    trustScore: 65,
    nonBrandedCoverage: 12,
    lastAudit: '2023-12-01T08:30:00Z',
  },
  'b3': { // Lumina Health: High trust, low tech optimization
    aiVisibilityScore: 60,
    trustScore: 98, // Very high trust (Health/YMYL)
    nonBrandedCoverage: 28,
    lastAudit: '2023-12-15T09:15:00Z',
  },
  'b4': { // Apex FinTech: Critical technical issues
    aiVisibilityScore: 25,
    trustScore: 88,
    nonBrandedCoverage: 5,
    lastAudit: '2023-11-20T16:45:00Z',
  }
};

// ============================================================================
// 3. AUDIT REPORTS (Keyed by Brand ID)
// ============================================================================
export const AUDIT_REPORTS: Record<string, AuditReport> = {
  
  // --- BRAND 1: ACME CORP (Balanced) ---
  'b1': {
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
        recommendations: []
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
  },

  // --- BRAND 2: TECHFLOW (Great Tech, Bad Context) ---
  'b2': {
    brandId: 'b2',
    timestamp: '2023-12-05T14:20:00Z',
    modules: [
      {
        id: 'm1',
        name: 'LLM Crawlability',
        score: 98,
        status: 'pass',
        insights: [
          { id: 'i1', title: 'Perfect Access', description: 'All AI bots have full access.', severity: 'pass' }
        ],
        recommendations: []
      },
      {
        id: 'm2',
        name: 'Content Context Window',
        score: 35,
        status: 'critical',
        insights: [
          {id: 'i2', title: 'Token Overflow', description: 'Technical documentation pages exceed 128k context window.', severity: 'critical'}
        ],
        recommendations: ['Split documentation into smaller sub-pages', 'Implement "TL;DR" summaries at top of page']
      },
      {
        id: 'm3',
        name: 'Entity Authority',
        score: 50,
        status: 'warning',
        insights: [{ id: 'i3', title: 'Ambiguous Entity', description: 'Name conflict with a plumbing company.', severity: 'warning' }],
        recommendations: ['Update About page with specific software industry schema']
      },
      { id: 'm4', name: 'Citation Flow', score: 60, status: 'warning', insights: [], recommendations: [] },
      { id: 'm5', name: 'Factuality & Hallucination', score: 90, status: 'pass', insights: [], recommendations: [] },
      { id: 'm6', name: 'Sentiment Analysis', score: 45, status: 'critical', insights: [{ id: 'i4', title: 'Negative Reviews', description: 'Recent downtime spike caused negative sentiment.', severity: 'critical' }], recommendations: ['Address downtime in public post'] },
      { id: 'm7', name: 'Competitor Share', score: 55, status: 'warning', insights: [], recommendations: [] }
    ]
  },

  // --- BRAND 3: LUMINA HEALTH (Trustworthy but Slow) ---
  'b3': {
    brandId: 'b3',
    timestamp: '2023-12-15T09:15:00Z',
    modules: [
      {
        id: 'm1',
        name: 'LLM Crawlability',
        score: 65,
        status: 'warning',
        insights: [
          { id: 'i1', title: 'Slow Response Time', description: 'Server response > 800ms causes crawler timeouts.', severity: 'warning' }
        ],
        recommendations: ['Implement edge caching']
      },
      {
        id: 'm2',
        name: 'Content Context Window',
        score: 90,
        status: 'pass',
        insights: [],
        recommendations: []
      },
      {
        id: 'm3',
        name: 'Entity Authority',
        score: 99,
        status: 'pass',
        insights: [{ id: 'i2', title: 'Medical Authority', description: 'Recognized as authoritative medical source.', severity: 'pass' }],
        recommendations: []
      },
      { id: 'm4', name: 'Citation Flow', score: 85, status: 'pass', insights: [], recommendations: [] },
      { 
        id: 'm5', 
        name: 'Factuality & Hallucination', 
        score: 95, 
        status: 'pass', 
        insights: [{id: 'i3', title: 'Zero Hallucination', description: 'AI summaries are 100% accurate to source text.', severity: 'pass'}], 
        recommendations: [] 
      },
      { id: 'm6', name: 'Sentiment Analysis', score: 88, status: 'pass', insights: [], recommendations: [] },
      { id: 'm7', name: 'Competitor Share', score: 40, status: 'critical', insights: [], recommendations: [] }
    ]
  },

  // --- BRAND 4: APEX FINTECH (Critical Failures) ---
  'b4': {
    brandId: 'b4',
    timestamp: '2023-11-20T16:45:00Z',
    modules: [
      {
        id: 'm1',
        name: 'LLM Crawlability',
        score: 10,
        status: 'critical',
        insights: [
          { id: 'i1', title: 'Total Blockage', description: 'JavaScript-only rendering prevents all LLM crawling.', severity: 'critical' }
        ],
        recommendations: ['Implement Server-Side Rendering (SSR)', 'Allow bot traffic in firewall']
      },
      {
        id: 'm2',
        name: 'Content Context Window',
        score: 20,
        status: 'critical',
        insights: [],
        recommendations: []
      },
      {
        id: 'm3',
        name: 'Entity Authority',
        score: 85,
        status: 'pass',
        insights: [{ id: 'i2', title: 'Financial Authority', description: 'Verified on Bloomberg and Reuters.', severity: 'pass' }],
        recommendations: []
      },
      { id: 'm4', name: 'Citation Flow', score: 70, status: 'warning', insights: [], recommendations: [] },
      { id: 'm5', name: 'Factuality & Hallucination', score: 50, status: 'warning', insights: [], recommendations: [] },
      { id: 'm6', name: 'Sentiment Analysis', score: 60, status: 'warning', insights: [], recommendations: [] },
      { id: 'm7', name: 'Competitor Share', score: 25, status: 'critical', insights: [], recommendations: [] }
    ]
  }
};