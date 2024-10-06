// app/components/BlogPost.tsx
import Image from 'next/image';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import type { Post } from '../types/wordpress';

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const date = parseISO(post.date);
  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  return (
    <article className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      {post.featuredImage && (
        <div className="relative h-96">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      )}
      <div className="px-4 py-6 md:px-8 md:py-8">
        <div className="flex items-center mb-4">
          <div 
            className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4"
          >
            {getInitial(post.author.node.name)}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{post.author.node.name}</p>
            <time dateTime={post.date} className="text-sm text-gray-600">
              {format(date, 'MMMM dd, yyyy')}
            </time>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>
        <div
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex flex-wrap gap-2 mb-8">
          {post.categories.edges.map(({ node: category }) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold hover:bg-blue-200 transition-colors duration-200"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
