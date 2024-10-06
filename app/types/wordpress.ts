// app/types/wordpress.ts
export interface Post {
  id: string;
  date: string;
  modified: string;
  title: string;
  content: string;
  slug: string;
  excerpt: string;
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

export interface PostsResponse {
  edges: Array<{ node: Post }>;
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
}
