import Link from 'next/link';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  author: {
    node: {
      name: string;
      avatar: {
        url: string;
      };
    };
  };
  categories: {
    edges: Array<{
      node: {
        name: string;
        slug: string;
      };
    }>;
  };
}

interface BlogListProps {
  posts: Array<{ node: Post }>;
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {posts.map(({ node }) => (
        <Link 
          href={`/blog/${node.slug}`} 
          key={node.id} 
          className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="relative h-48">
            {post.featuredImage?.node?.sourceUrl && (
              <Image
      src={post.featuredImage.node.sourceUrl}
      alt={post.featuredImage.node.altText || post.title}
      layout="fill"
      objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
  )}
</div>
  
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">{node.title}</h2>
            <div className="flex items-center mb-4">
              <Image
                src={node.author.node.avatar.url}
                alt={node.author.node.name}
                width={24}
                height={24}
                className="rounded-full mr-2"
              />
              <span className="text-sm text-gray-600">{node.author.node.name}</span>
              <span className="mx-2 text-gray-400">•</span>
              <time dateTime={node.date} className="text-sm text-gray-600">
                {format(parseISO(node.date), 'MMM dd, yyyy')}
              </time>
            </div>
            <div 
              className="text-gray-700 mb-4 line-clamp-3" 
              dangerouslySetInnerHTML={{ __html: node.excerpt }} 
            />
            <div className="flex flex-wrap gap-2">
              {node.categories.edges.slice(0, 3).map(({ node: category }) => (
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
