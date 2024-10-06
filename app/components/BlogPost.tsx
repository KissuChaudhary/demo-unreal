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
      <div className="p-8">
        <div className="flex items-center mb-4">
         {post.author.node.avatar.url ? (
                <>
                  <Image
                    src={post.author.node.avatar.url}
                    alt={post.author.node.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallbackAvatar = target.nextElementSibling as HTMLDivElement | null;
                      if (fallbackAvatar) {
                        fallbackAvatar.style.display = 'flex';
                      }
                    }}
                  />
                  <div 
                    className="w-6 h-6 rounded-full bg-blue-500 text-white items-center justify-center mr-2 hidden"
                  >
                    {getInitial(post.author.node.name)}
                  </div>
                </>
              ) : (
                <div 
                  className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2"
                >
                  {getInitial(post.author.node.name)}
                </div>
              )}
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
