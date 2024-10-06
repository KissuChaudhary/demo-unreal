// app/lib/api.ts
const API_URL = process.env.WORDPRESS_API_URL;

interface Post {
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

interface PostsResponse {
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
  edges: Array<{
    node: Post;
  }>;
}

async function fetchAPI(query: string, { variables }: { variables?: any } = {}): Promise<any> {
  const headers = { 'Content-Type': 'application/json' };
  
  const res = await fetch(API_URL!, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  
  return json.data;
}

export async function getAllPosts(page: number = 1, perPage: number = 9): Promise<PostsResponse> {
  const data = await fetchAPI(`
    query AllPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            date
            title
            slug
            excerpt
            featuredImage {
              node {
                sourceUrl(size: LARGE)
                altText
              }
            }
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `, {
    variables: {
      first: perPage,
      after: page > 1 ? btoa(`arrayconnection:${(page - 1) * perPage - 1}`) : null,
    }
  });
  return data?.posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const data = await fetchAPI(`
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        id
        date
        modified
        title
        content(format: RENDERED)
        slug
        excerpt(format: RENDERED)
        featuredImage {
          node {
            sourceUrl(size: LARGE)
            altText
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    }
  `, {
    variables: {
      id: slug,
      idType: 'SLUG'
    }
  });
  return data?.post;
}
