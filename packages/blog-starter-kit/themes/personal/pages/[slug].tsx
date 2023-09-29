import request from "graphql-request";
import ErrorPage from "next/error";
import dynamic from "next/dynamic";
import Head from "next/head";
import Container from "@starter-kit/components/container";
import Layout from "@starter-kit/components/layout";
import PostBody from "@starter-kit/components/post-body";
import PostHeader from "@starter-kit/components/post-header";
import type PublicationType from "@starter-kit/interfaces/publication";
import type PostType from "@starter-kit/interfaces/post";
import {
  SinglePostByPublicationDocument,
  SinglePostByPublicationQuery,
  SinglePostByPublicationQueryVariables,
  SlugPostsByPublicationDocument,
  SlugPostsByPublicationQuery,
  SlugPostsByPublicationQueryVariables,
} from "../generated/graphql";
import Header from "@starter-kit/components/header";
import Footer from "@starter-kit/components/footer";
import { AppProvider } from "@starter-kit/components/contexts/appContext";
import PersonalHeader from "@starter-kit/components/personal-theme-header";
import CoverImage from "@starter-kit/components/cover-image";
import { resizeImage } from "@starter-kit/utils/image";
import DateFormatter from "@starter-kit/components/date-formatter";
// import PostComments from "@starter-kit/components/post-comments";
// import PostTOC from "@starter-kit/components/post-toc";

// Dynamic Imports
const Subscribe = dynamic(() => import("@starter-kit/components/subscribe"));

type Props = {
  post: PostType;
  publication: PublicationType;
  preview?: boolean;
};

export default function Post({ publication, post, preview }: Props) {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }
  const title = `${post.title} | Next.js Blog Example with Hashnode`;
  const highlightJsMonokaiTheme =
    ".hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}";

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Blog",
    "@id": "https://dataliberate.com/blog/",
    mainEntityOfPage: "https://dataliberate.com/blog",
    name: "Data Liberate Blog",
    description:
      "Thoughts about Linked Data, Schema.org, Structured Data, Cultural Heritage Meta Data, and associated technologies",
    publisher: {
      "@type": "Organization",
      "@id": "https://dataliberate.com",
      name: "Data Liberate",
      logo: {
        "@type": "ImageObject",
        "@id":
          "https://dataliberate.com/wp-content/uploads/2011/12/Data_Liberate_Logo-200.png",
        url: "https://dataliberate.com/wp-content/uploads/2011/12/Data_Liberate_Logo-200.png",
      },
    },
    blogPost: [
      {
        "@type": "BlogPosting",
        "@id":
          "https://dataliberate.com/2019/05/14/library-metadata-evolution-final-mile/#BlogPosting",
        mainEntityOfPage:
          "https://dataliberate.com/2019/05/14/library-metadata-evolution-final-mile/",
        headline: "Library Metadata Evolution: The Final Mile",
        name: "Library Metadata Evolution: The Final Mile",
        description:
          "When Schema.org arrived on the scene I thought we might have arrived at the point where library metadata  could finally blossom; adding value outside of library systems to help library curated resources become first class citizens, and hence results, in the global web we all inhabit.  But as yet it has not happened.",
        datePublished: "2019-05-14",
        dateModified: "2019-05-14",
        author: {
          "@type": "Person",
          "@id": "https://dataliberate.com/author/richard-wallis/#Person",
          name: "Richard Wallis",
          url: "https://dataliberate.com/author/richard-wallis/#Person",
        },
        image: {
          "@type": "ImageObject",
          "@id":
            "https://dataliberate.com/wp-content/uploads/2019/05/Metadata_Evolution_the_Final_Mile.jpg",
          url: "https://dataliberate.com/wp-content/uploads/2019/05/Metadata_Evolution_the_Final_Mile.jpg",
        },
        url: "https://dataliberate.com/2019/05/14/library-metadata-evolution-final-mile/",
        keywords: ["Bibframe2Schema.org", "Libraries", "Library of Congress"],
      },
    ],
  };

  return (
    <AppProvider publication={publication}>
      <Layout preview={preview}>
        <Container className="flex flex-col items-stretch max-w-2xl gap-10 px-5 py-10 mx-auto">
          <PersonalHeader />
          <article className="flex flex-col items-start gap-10 pb-10">
            <Head>
              <title>{title}</title>
              <link rel="canonical" href={post.url} />
              <meta property="og:image" content={post.ogMetaData.image} />
              <style
                dangerouslySetInnerHTML={{ __html: highlightJsMonokaiTheme }}
              ></style>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
              />
            </Head>
            <h1 className="text-4xl leading-tight tracking-tight text-black dark:text-white">
              {post.title}
            </h1>
            <div className="text-neutral-600 dark:text-neutral-400">
              <DateFormatter dateString={post.publishedAt} />
            </div>
            {post.coverImage && (
              <div className="w-full">
                <CoverImage
                  title={title}
                  src={resizeImage(post.coverImage.url, {
                    w: 1600,
                    h: 840,
                    c: "thumb",
                  })}
                />
              </div>
            )}
            <PostBody contentMarkdown={post.content.markdown} />
            <div className="w-full mx-auto md:max-w-screen-md text-slate-600 dark:text-neutral-300">
              <ul className="flex flex-row flex-wrap items-center gap-2">
                <li>
                  <a
                    href="#"
                    className="block px-2 py-1 font-medium border rounded-full dark:border-neutral-800 dark:hover:bg-neutral-800 md:px-4 hover:bg-slate-50"
                  >
                    #javascript
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-2 py-1 font-medium border rounded-full dark:border-neutral-800 dark:hover:bg-neutral-800 md:px-4 hover:bg-slate-50"
                  >
                    #ai
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-2 py-1 font-medium border rounded-full dark:border-neutral-800 dark:hover:bg-neutral-800 md:px-4 hover:bg-slate-50"
                  >
                    #nodejs
                  </a>
                </li>
              </ul>
            </div>
            {/* <PostComments author={post.author} /> */}
            <Subscribe />
          </article>
          <footer className="pt-10 text-sm border-t text-neutral-500 dark:text-neutral-400 dark:border-neutral-800">
            &copy; 2023 {publication.title}
          </footer>
        </Container>
      </Layout>
    </AppProvider>
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
  const publication = data.publication;

  return {
    props: {
      post,
      publication,
    },
    revalidate: 1,
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
