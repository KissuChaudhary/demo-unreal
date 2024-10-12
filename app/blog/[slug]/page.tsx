// app/blog/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '../../lib/api';
import BlogPost from '../../components/BlogPost';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: `${post.title} | AI Headshot Generator Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author.node.name],
      images: [{ url: post.featuredImage?.node.sourceUrl }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.featuredImage?.node.sourceUrl,
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      '@type': 'Person',
      name: post.author.node.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Headshot Generator',
      logo: {
        '@type': 'ImageObject',
        url: 'https://your-domain.com/logo.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl py-8 mx-auto px-2 pb-6 sm:px-6 lg:px-8">
        <BlogPost post={post} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const postsResponse = await getAllPosts();
  return postsResponse.edges.map(({ node }) => ({ 
    slug: node.slug 
  }));
}
