export interface Resource {
  id: number;
  title: string;
  description: string;
  category: 'Programming' | 'Design' | 'Math';
  url: string;
  author: string;
  publicationDate: Date;
  isFeatured: boolean;
}