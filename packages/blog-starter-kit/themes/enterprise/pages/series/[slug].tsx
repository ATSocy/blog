import request from "graphql-request";
import Head from "next/head";
import Container from "@starter-kit/components/container";
import Layout from "@starter-kit/components/layout";
import type PublicationType from "@starter-kit/interfaces/publication";
import type PostType from "@starter-kit/interfaces/post";
import Header from "@starter-kit/components/header";
import Footer from "@starter-kit/components/footer";
import { AppProvider } from "@starter-kit/components/contexts/appContext";
import {
  SeriesPostsByPublicationDocument,
  SeriesPostsByPublicationQuery,
  SeriesPostsByPublicationQueryVariables,
} from "../../generated/graphql";
import MorePosts from "@starter-kit/components/more-posts";
import { resizeImage } from "@starter-kit/utils/image";
import Error from "next/error";
import CoverImage from "@starter-kit/components/cover-image";

type Props = {
  posts: PostType[];
  publication: PublicationType;
};

const DEFAULT_COVER =
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format";

export default function Post({ publication, posts }: Props) {
  if (!publication.series) {
    return <Error statusCode={404} />;
  }
  const title = `${publication.series.name} - ${publication.title}`;
  return (
    <AppProvider publication={publication}>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <Container className="flex flex-col items-stretch gap-10 px-5 pb-10">
          <div
            className={`${
              publication.series.coverImage ? "col-span-full" : "col-span-3"
            } grid grid-cols-4 md:gap-5 pt-5`}
          >
            <div className="flex flex-col gap-1 col-span-full md:col-span-2 lg:col-span-3">
              <p className="font-bold uppercase text-slate-500 dark:text-neutral-400">
                Series
              </p>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-neutral-50">
                {publication.series.name}
              </h1>
              <div className="hashnode-content-style" dangerouslySetInnerHTML={{ __html: publication.series.description.html }}></div>
            </div>
            <div className="relative col-span-full md:col-span-2 lg:col-span-1">
              <CoverImage
                title={publication.series.name}
                src={
                  resizeImage(publication.series.coverImage, {
                    w: 400,
                    h: 210,
                    c: "thumb",
                  }) || DEFAULT_COVER
                }
              />
            </div>
          </div>
          {posts.length > 0 ? (
            <MorePosts context="series" posts={posts} />
          ) : (
            <div>No Posts found</div>
          )}
        </Container>
        <Footer />
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
    SeriesPostsByPublicationQuery,
    SeriesPostsByPublicationQueryVariables
  >(
    process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
    SeriesPostsByPublicationDocument,
    {
      host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
      first: 20,
      seriesSlug: params.slug,
    }
  );

  // Extract the posts data from the GraphQL response
  const publication = data.publication;
  const posts = publication.series
    ? publication.series.posts.edges.map((edge) => edge.node)
    : [];

  return {
    props: {
      posts,
      publication,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
