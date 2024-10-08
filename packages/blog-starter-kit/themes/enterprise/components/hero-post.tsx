import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { DEFAULT_COVER } from '../utils/const';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	slug: string;
};

export const HeroPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="grid grid-cols-1 gap-5 border-t border-b  border-neutral-200 dark:border-neutral-800 py-5 ">
			
			<div className="col-span-1">
				<CoverImage
					title={title}
					src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }) || DEFAULT_COVER}
					slug={slug}
					priority={true}
				/>
			</div>
			
			<div className="col-span-1 flex flex-col gap-2">
				<h1 className="text-4xl font-bold leading-snug text-neutral-800 dark:text-neutral-50 lg:text-6xl">
					<a
						href={postURL}
						className="hover:text-fuxia dark:hover:text-lime leading-tight tracking-tight hover:underline"
					>
						{title}
					</a>
				</h1>
				{/* <Link href={postURL}>
					<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">{excerpt}</p>
				</Link> */}
				<div className="text-sm font-semibold self-end text-neutral-500 dark:text-neutral-400">
					<a href={postURL}>
						<DateFormatter dateString={date} />
					</a>
				</div>
				
			</div>
			
		</section>
	);
};
