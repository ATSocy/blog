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

export const SecondaryPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="grid items-start gap-5 border-l border-r border-neutral-200 dark:border-neutral-800 px-4 md:grid-cols-2">
			<div className="col-span-1">
				<CoverImage
					title={title}
					src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }, DEFAULT_COVER)}
					slug={slug}
				/>
			</div>
			<div className="col-span-1 flex flex-col justify-between h-full gap-2">
				<h1 className="text-2xl font-semibold  text-neutral-800 dark:text-neutral-50">
					<a
						href={postURL}
						className="hover:text-fuxia dark:hover:text-lime hover:underline"
					>
						{title}
					</a>
				</h1>
				{/* <Link href={postURL}>
					<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">
						{excerpt.length > 100 ? excerpt.substring(0, 100) + '…' : excerpt}
					</p>
				</Link> */}
				<div className="text-sm self-end font-semibold text-neutral-500 dark:text-neutral-400">
					<a href={postURL}>
						<DateFormatter dateString={date} />
					</a>
				</div>
			</div>
		</section>
	);
};
