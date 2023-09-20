import request from "graphql-request";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "@starter-kit/components/container";
import Header from "@starter-kit/components/header";
import Layout from "@starter-kit/components/layout";
import PostBody from "@starter-kit/components/post-body";
import PostHeader from "@starter-kit/components/post-header";
import PostTitle from "@starter-kit/components/post-title";
import type PostType from "@starter-kit/components/interfaces/post";
//import { CMS_NAME } from "../../lib/constants";
import {
  SinglePostByPublicationDocument,
  SinglePostByPublicationQuery,
  SinglePostByPublicationQueryVariables,
  SlugPostsByPublicationDocument,
  SlugPostsByPublicationQuery,
  SlugPostsByPublicationQueryVariables,
} from "../generated/graphql";
// import PostComments from "@starter-kit/components/post-comments";
// import PostTOC from "@starter-kit/components/post-toc";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  const title = `${post.title} | Next.js Blog Example with Hashnode`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const highlightJsMonokaiTheme =
  '.hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}';
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="flex flex-col items-start gap-10 pb-10">
              <Head>
                <title>{title}</title>
                <link rel="canonical" href={post.url} />
                <meta property="og:image" content={post.ogMetaData.image} />
                <style dangerouslySetInnerHTML={{ __html: highlightJsMonokaiTheme }}></style>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage?.url}
                date={post.publishedAt}
                author={post.author}
              />
              {/* <PostTOC /> */}
              <PostBody contentMarkdown={post.content.markdown} />
              {/* <PostComments author={post.author} /> */}
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const data = await request<
    SinglePostByPublicationQuery,
    SinglePostByPublicationQueryVariables
  >(
    process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
    SinglePostByPublicationDocument,
    {
      host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
      slug: params.slug,
    }
  );

  // Extract the post data from the GraphQL response
  const post = data.publication.post;

  return {
    props: {
      post,
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const data = await request<
    SlugPostsByPublicationQuery,
    SlugPostsByPublicationQueryVariables
  >(
    process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
    SlugPostsByPublicationDocument,
    {
      first: 10,
      host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
    }
  );

  // Extract the post slugs from the GraphQL response
  const postSlugs = data.publication.posts.edges.map(
    (edge: any) => edge.node.slug
  );

  return {
    paths: postSlugs.map((slug: string) => {
      return {
        params: {
          slug: slug,
        },
      };
    }),
    fallback: "blocking",
  };
}
