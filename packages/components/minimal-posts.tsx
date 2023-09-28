import PostType from "@starter-kit/interfaces/post";
// import Button from "./button";
// import { ChevronDownSVG } from "./icons";
import PostPreview from "./post-preview";
import Link from "next/link";
import MinimalPostPreview from "./minimal-post-preview";

type Props = {
  posts: PostType[];
  context: "home" | "series" | "tag";
};

const MinimalPosts = ({ posts, context }: Props) => {
  return (
    <section className="flex flex-col items-stretch w-full gap-10 lg:max-w-lg">
      {posts.map((post) => (
        <MinimalPostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage?.url}
          date={post.publishedAt}
          author={{
            username: post.author.username,
            name: post.author.name,
            profilePicture: post.author.profilePicture,
          }}
          slug={post.slug}
          excerpt={post.brief}
          url={post.url}
        />
      ))}
    </section>
  );
};

export default MinimalPosts;
