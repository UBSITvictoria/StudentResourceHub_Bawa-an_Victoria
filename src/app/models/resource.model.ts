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

export const SAMPLE_RESOURCES: Resource[] = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    description: "A beginner-friendly guide to JavaScript programming",
    category: "Programming",
    url: "https://example.com/js-intro",
    author: "John Smith",
    publicationDate: new Date("2023-05-15"),
    isFeatured: true
  },
  {
    id: 2,
    title: "UI/UX Design Principles",
    description: "Learn the fundamentals of user interface and experience design",
    category: "Design",
    url: "https://example.com/design-principles",
    author: "Jane Doe",
    publicationDate: new Date("2023-06-20"),
    isFeatured: false
  },
  {
    id: 3,
    title: "Linear Algebra Basics",
    description: "Essential concepts in linear algebra for programmers",
    category: "Math",
    url: "https://example.com/linear-algebra",
    author: "Robert Johnson",
    publicationDate: new Date("2023-07-10"),
    isFeatured: true
  }
];