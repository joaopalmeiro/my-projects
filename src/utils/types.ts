export interface ActiveRepo {
  name: string;
  url: string;
  description: string;
  category: string;
  subcategory: string | null;
}

export interface Repo {
  id: number;
  name: string;
  updatedAt: string;
  url: string;
  openIssues: number;
}
