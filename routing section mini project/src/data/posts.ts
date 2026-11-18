export interface Post {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
}


export const posts: Post[] = [

  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and build your first component.',
    content: 'React is a powerful library for building UIs. In this post...',
    date: '2025-01-15',
  },
  {
    id: 2,
    title: 'Understanding Hooks',
    excerpt: 'A deep dive into useState, useEffect, and custom hooks.',
    content: 'Hooks revolutionized how we write React components...',
    date: '2025-01-22',
  },
  {
    id: 3,
    title: 'TypeScript with React',
    excerpt: 'Why TypeScript is a game changer for React development.',
    content: 'TypeScript brings type safety to JavaScript...',
    date: '2025-02-01',
  },

]