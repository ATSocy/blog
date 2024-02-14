// import { useState } from 'react';
// import dynamic from 'next/dynamic';
// import Head from 'next/head';
// import { GetStaticProps } from 'next';
// import { Container } from '../../components/container';
// import { AppProvider } from '../../components/contexts/appContext';
// import { Footer } from '../../components/footer';
// import { Header } from '../../components/header';
// import { Announcement } from '../../components/announcement';
// import { request } from 'graphql-request';
// import { Layout } from '../../components/layout';
// import { PostsByPublicationDocument } from '../../generated/graphql';


// // Define your GraphQL query as a string or import it if it's defined externally
// const GET_PUBLICATION_DETAILS = `
// query GetPublicationDetails {
//   publication {
//     id
//     title
//     descriptionSEO
//     ogMetaData {
//       image
//     }
//     author {
//       name
//     }
//   }
// }`;

// const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

// type Publication = {
//   id: string;
//   title: string;
//   descriptionSEO: string;
//   ogMetaData: {
//     image: string;
//   };
//   author: {
//     name: string;
//   };
// };

// type Props = {
//   publication: Publication;
// };

// export const getStaticProps: GetStaticProps<Props> = async () => {
// 	// Directly fetch publication data
// 	const postsData = await request<{ publication: Publication }, any>(
// 	  GQL_ENDPOINT,
// 	  // Use the PostsByPublicationDocument if it fetches publication details,
// 	  // or replace it with a specific query for fetching publication details.
// 	  PostsByPublicationDocument, 
// 	  {
// 		first: 10, // This argument might not be needed if you're only fetching publication details
// 		host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
// 	  },
// 	);
  
// 	const { publication } = postsData;
  
// 	if (!publication) {
// 	  return {
// 		notFound: true,
// 	  };
// 	}
  
// 	return {
// 	  props: {
// 		publication,
// 		// You can include other props if necessary, like initialPageInfo or posts
// 	  },
// 	  revalidate: 1, // Or your preferred revalidation time
// 	};
//   };

// const ZIndexPage = ({ publication }: Props) => {
//   // You can maintain state and any other hooks you need

//   return (
//     <AppProvider publication={publication} /* You might need to pass publication or other props here if necessary */>
//       <Layout>
//         <Head>
//           {/* Keep essential meta tags here */}
//           <title>Z-INDEX: A Zenonian HyperArchive by ATS</title>
//           <meta name="description" content="The HyperArchive is dedicated to aggregating all essential links and resources related to the Zenon Network" />
//           {/* Add any additional tags you find necessary */}
//         </Head>
//         <Header />
//         <Announcement />
//         <Container className="/* Your container styling here */">
//           {/* Your page content goes here */}
//         </Container>
//         <Footer />
//       </Layout>
//     </AppProvider> 
//   );
// };


// export default ZIndexPage;
