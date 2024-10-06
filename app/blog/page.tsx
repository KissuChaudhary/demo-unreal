// app/blog/page.tsx

import { getAllPosts } from '../lib/api';
import BlogList from '../components/BlogList';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | AI Headshot Generator',
  description: 'Read our latest articles about AI-generated headshots and professional photography tips.',
  openGraph: {
    title: 'Blog | AI Headshot Generator',
    description: 'Read our latest articles about AI-generated headshots and professional photography tips.',
    type: 'website',
    url: 'https://your-domain.com/blog',
  },
};

interface BlogPageProps {
  searchParams?: { page?: string };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const page = Number(searchParams?.page) || 1;
  const postsPerPage = 9;
  const { edges: posts, pageInfo } = await getAllPosts(page, postsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold mb-12 text-center text-gray-900">Our Blog</h1>
      <BlogList posts={posts} />
      <div className="mt-12 flex justify-center gap-4">
        {page > 1 && (
          <Link 
            href={`/blog?page=${page - 1}`}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Previous
          </Link>
        )}
        {pageInfo.hasNextPage && (
          <Link 
            href={`/blog?page=${page + 1}`}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
