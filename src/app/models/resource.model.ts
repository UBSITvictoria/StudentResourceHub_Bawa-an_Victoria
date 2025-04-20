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
    description: "A beginner-friendly guide to JavaScript programming, covering basics, DOM manipulation, and modern ES6+ features.",
    category: "Programming",
    url: "https://javascript.info/",
    author: "John Smith",
    publicationDate: new Date("2023-05-15"),
    isFeatured: true
  },
  {
    id: 2,
    title: "UI/UX Design Principles",
    description: "Learn the fundamentals of user interface and experience design, including color theory, typography, and layout principles.",
    category: "Design",
    url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
    author: "Jane Doe",
    publicationDate: new Date("2023-06-20"),
    isFeatured: true
  },
  {
    id: 3,
    title: "Linear Algebra Basics",
    description: "Essential concepts in linear algebra for programmers and data scientists, including matrices, vectors, and transformations.",
    category: "Math",
    url: "https://www.khanacademy.org/math/linear-algebra",
    author: "Robert Johnson",
    publicationDate: new Date("2023-07-10"),
    isFeatured: true
  },
  {
    id: 4,
    title: "Python for Data Science",
    description: "Comprehensive guide to using Python for data analysis, including pandas, numpy, and matplotlib libraries.",
    category: "Programming",
    url: "https://pandas.pydata.org/docs/getting_started/",
    author: "Sarah Wilson",
    publicationDate: new Date("2023-08-15"),
    isFeatured: false
  },
  {
    id: 5,
    title: "Responsive Web Design Mastery",
    description: "Master the art of creating websites that work seamlessly across all devices using modern CSS techniques.",
    category: "Design",
    url: "https://web.dev/responsive-web-design-basics/",
    author: "Michael Chen",
    publicationDate: new Date("2023-09-01"),
    isFeatured: false
  },
  {
    id: 6,
    title: "Calculus Made Easy",
    description: "A practical approach to understanding calculus concepts, with real-world examples and interactive exercises.",
    category: "Math",
    url: "https://www.mathsisfun.com/calculus/",
    author: "Emily Brown",
    publicationDate: new Date("2023-09-15"),
    isFeatured: false
  },
  {
    id: 7,
    title: "React.js Fundamentals",
    description: "Learn the core concepts of React.js, including components, hooks, and state management.",
    category: "Programming",
    url: "https://react.dev/learn",
    author: "David Lee",
    publicationDate: new Date("2023-10-01"),
    isFeatured: true
  },
  {
    id: 8,
    title: "Color Theory for Digital Design",
    description: "Understanding color psychology and creating effective color schemes for digital products.",
    category: "Design",
    url: "https://color.adobe.com/create/color-wheel",
    author: "Lisa Anderson",
    publicationDate: new Date("2023-10-15"),
    isFeatured: false
  },
  {
    id: 9,
    title: "Statistics for Data Analysis",
    description: "Essential statistical concepts and methods for data analysis and interpretation.",
    category: "Math",
    url: "https://www.statisticshowto.com/",
    author: "Tom Williams",
    publicationDate: new Date("2023-11-01"),
    isFeatured: false
  }
];