// components/BlogPost.tsx
'use client'; // Add this at the top to make it a Client Component

import Image from 'next/image';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { useState } from 'react';

interface Post {
  title: string;
  date: string;
  content: string;
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

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const date = parseISO(post.date);
  const [featuredImageError, setFeaturedImageError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  
  const formatContent = (content: string) => {
    return content
      .replace(/<p>/g, '<p class="mb-6 text-gray-700 leading-relaxed">')
      .replace(/<h2>/g, '<h2 class="text-2xl font-bold mt-8 mb-4">')
      .replace(/<h3>/g, '<h3 class="text-xl font-bold mt-6 mb-3">')
      .replace(/<ul>/g, '<ul class="list-disc pl-6 mb-6">')
      .replace(/<ol>/g, '<ol class="list-decimal pl-6 mb-6">')
      .replace(/<li>/g, '<li class="mb-2">')
      .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-gray-300 pl-4 italic my-6">')
      .replace(/<a /g, '<a class="text-blue-600 hover:text-blue-800" ');
  };

  return (
    <article className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      {post.featuredImage?.node?.sourceUrl && !featuredImageError ? (
        <div className="relative h-96">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            priority
            className="object-cover"
            onError={() => setFeaturedImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="h-96 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No featured image available</span>
        </div>
      )}
      
      <div className="p-8">
        <div className="flex items-center mb-4">
          {post.author.node.avatar?.url && !avatarError ? (
            <div className="relative w-10 h-10">
              <Image
                src={post.author.node.avatar.url}
                alt={post.author.node.name}
                fill
                className="rounded-full object-cover"
                onError={() => setAvatarError(true)}
              />
            </div>
          ) : (
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
              {post.author.node.name.charAt(0)}
            </div>
          )}
          <div className="ml-4">
            <p className="font-semibold text-gray-900">{post.author.node.name}</p>
            <time dateTime={post.date} className="text-sm text-gray-600">
              {format(date, 'MMMM dd, yyyy')}
            </time>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />
        
        <div className="flex flex-wrap gap-2 mt-8">
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
