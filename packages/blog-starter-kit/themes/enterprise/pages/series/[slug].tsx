import { resizeImage } from '@starter-kit/utils/image';
import request from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { Container } from '../../components/container';
import { AppProvider } from '../../components/contexts/appContext';
import { CoverImage } from '../../components/cover-image';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { MorePosts } from '../../components/more-posts';
import {
	PostFragment,
	PublicationFragment,
	SeriesFragment,
	SeriesPostsByPublicationDocument,
	SeriesPostsByPublicationQuery,
	SeriesPostsByPublicationQueryVariables,
} from '../../generated/graphql';
import { DEFAULT_COVER } from '../../utils/const';
import KnowYourAlienSVG from '../../components/icons/svgs/KnowYourAlienSVG';
import { KnowYourAlienAvatars } from '../../components/kya';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
	series: SeriesFragment;
	posts: PostFragment[];
	publication: PublicationFragment;
};

export default function Post({ series, publication, posts }: Props) {
	const title = `${series.name} - ${publication.title}`;
	
	return (
		<AppProvider publication={publication}>
			<Layout>
				<Head>
					<title>{title}</title>
				</Head>
				<Header />
				<Container className="flex flex-col items-stretch gap-10 pb-10">
					<div className="mt-10 grid grid-cols-1 gap-6">
						<KnowYourAlienSVG className="dark:fill-white"/>
						<KnowYourAlienAvatars context="series" posts={posts}/>
					</div>
					<div className={`${	series.coverImage ? 'col-span-full' : 'col-span-3' } grid grid-cols-4 mb-12 text-center md:gap-5`}>
						<div className="col-span-full flex items-center flex-col gap-1 ">
							<p className="font-bold uppercase text-neutral-500 dark:text-neutral-400">Series</p>
							<h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
								{series.name}
							</h1>
							<div
								className="text-neutral-600 dark:text-neutral-500 text-lg max-w-2xl"
								dangerouslySetInnerHTML={{ __html: series.description?.html ?? '' }}
							>
							</div>
						</div>
						{/* <div className="col-span-full md:col-span-2 lg:col-span-1">
							<CoverImage
								title={series.name}
								src={resizeImage(
									series.coverImage,
									{
										w: 400,
										h: 210,
										c: 'thumb',
									},
									DEFAULT_COVER,
								)}
							/>
						</div> */}
					</div>
					{posts.length > 0 ? (
						<MorePosts context="series" posts={posts} />
					) : (
						<div className="dark:text-white">No Posts found</div>
					)}
				</Container>
				<Footer />
			</Layout>
		</AppProvider>
	);
}

type Params = {
	slug: string;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	if (!params) {
		throw new Error('No params');
	}
	const data = await request<SeriesPostsByPublicationQuery, SeriesPostsByPublicationQueryVariables>(
		process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
		SeriesPostsByPublicationDocument,
		{
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
			first: 20,
			seriesSlug: params.slug,
		},
	);

	const publication = data.publication;
	const series = publication?.series;
	if (!publication || !series) {
		return {
			notFound: true,
		};
	}
	const posts = publication.series ? publication.series.posts.edges.map((edge) => edge.node) : [];


	return {
		props: {
			series,
			posts,
			publication,
		},
		revalidate: 1,
	};
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

