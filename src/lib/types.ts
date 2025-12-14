// 1. Brand Identity
export interface Brand {
  id: string;
  name: string;
  domain: string;
  logoUrl: string; // Placeholder or emoji for now
}

// 2. Dashboard Snapshot Data
export interface DashboardSnapshot {
  aiVisibilityScore: number;
  trustScore: number;
  nonBrandedCoverage: number; // percentage
  lastAudit: string; // ISO Date string
}

// 3. Audit Module Data
export type ModuleStatus = 'pass' | 'warning' | 'critical';

export interface AuditInsight {
  id: string;
  title: string;
  description: string;
  severity: ModuleStatus;
}

export interface AuditModule {
  id: string;
  name: string; // e.g., "Crawlability", "Content Quality"
  score: number; // 0-100
  status: ModuleStatus;
  insights: AuditInsight[];
  recommendations: string[]; // Textual recommendations [cite: 82]
}

// 4. Complete Audit Report
export interface AuditReport {
  brandId: string;
  timestamp: string;
  modules: AuditModule[]; // Array of 7 modules [cite: 45]
}