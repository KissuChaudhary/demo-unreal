import Image from 'next/image';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

const BlogPost = ({ post }) => {
  const date = parseISO(post.date);
  
  return (
    <article className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      {post.featuredImage && (
        <div className="relative h-96">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-8">
        <div className="flex items-center mb-4">
          <Image
            src={post.author.node.avatar.url}
            alt={post.author.node.name}
            width={40}
            height={40}
            className="rounded-full mr-4"
          />
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
          {post.categories.edges.map(({ node }) => (
            <Link 
              key={node.slug} 
              href={`/category/${node.slug}`}
              className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold hover:bg-blue-200 transition-colors duration-200"
            >
              {node.name}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
