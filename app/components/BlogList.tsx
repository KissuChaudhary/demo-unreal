// app/components/BlogList.tsx
import Image from 'next/image';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import type { Post } from '../types/wordpress';

interface BlogListProps {
  posts: Array<{ node: Post }>;
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {posts.map(({ node: post }) => (
        <Link 
          href={`/blog/${post.slug}`} 
          key={post.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="relative h-48">
            {post.featuredImage && (
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            )}
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">{post.title}</h2>
            <div className="flex items-center mb-4">
              {post.author.node.avatar.url ? (
                <>
                  <Image
                    src={post.author.node.avatar.url}
                    alt={post.author.node.name}
                    width={24}
                    height={24}
                    className="rounded-full mr-2"
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
              <span className="text-sm text-gray-600">{post.author.node.name}</span>
              <span className="mx-2 text-gray-400">•</span>
              <time dateTime={post.date} className="text-sm text-gray-600">
                {format(parseISO(post.date), 'MMM dd, yyyy')}
              </time>
            </div>
            <div 
              className="text-gray-700 mb-4 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
            <div className="flex flex-wrap gap-2">
              {post.categories.edges.slice(0, 3).map(({ node: category }) => (
                <span
                  key={category.slug}
                  className="bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-xs font-semibold"
                >
                  {category.name}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
