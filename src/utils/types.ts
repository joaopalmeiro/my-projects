export interface ActiveRepo {
  name: string;
  url: string;
  description: string;
  category: string;
}

export interface Repo {
  id: number;
  name: string;
  openIssues: number;
  updatedAt: Date;
  url: string;
}

export interface ClosedIssues {
  total: number;
  today: number;
}
