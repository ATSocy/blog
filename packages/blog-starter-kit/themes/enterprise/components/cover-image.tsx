import Image from 'next/image';
import Link from 'next/link';

type Props = {
	title: string;
	src: string;
	slug?: string;
	priority?: boolean;
	noBorderOnHover?: boolean;
};

export const CoverImage = ({ title, src, slug, priority = false, noBorderOnHover = false }: Props) => {
	const postURL = `/${slug}`;
	const hoverClass = noBorderOnHover ? 'hover:border-transparent' : 'hover:border-fuxia dark:hover:border-lime';


	const image = (
		<div className="relative pt-[52.5%]">
			<Image
				src={src}
				alt={`Cover Image for ${title}`}
				className={`w-full rounded-lg hover:border object-cover ${hoverClass} dark:border-neutral-800`}
				fill
				unoptimized
				priority={priority}
			/>
		</div>
	);
	return (
		<div className="sm:mx-0">
			{slug ? (
				<Link href={postURL} aria-label={title}>
					{image}
				</Link>
			) : (
				image
			)}
		</div>
	);
};
