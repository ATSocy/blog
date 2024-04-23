import Link from 'next/link';
import { useAppContext } from './contexts/appContext';
import { GithubSVG, HashnodeSVG, LinkedinSVG, RssSVG, XSVG } from './icons';
import NostrSVG from './icons/svgs/NostrSVG.js';
import { Separator } from './ui/separator';

export const SocialLinks = ({ isSidebar }: { isSidebar?: boolean }) => {
	const { publication } = useAppContext();
	const hasSocialLinks = !Object.values(publication.links!).every((val) => val === '');

	return (
		<>
			<div
				className={`col-span-1 flex flex-row flex-wrap gap-1 text-slate-600 dark:text-neutral-300 md:flex-nowrap ${
					isSidebar ? 'justify-start' : 'justify-end'
				}`}
			>
				{hasSocialLinks && (
					<>
						{publication.links?.twitter && (
							<a
								href={publication.links.twitter}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Twitter, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<XSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.github && (
							<a
								href={publication.links.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Github, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<GithubSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.linkedin && (
							<a
								href={publication.links.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Linkedin, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<LinkedinSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.hashnode && (
							<a
								href={publication.links.hashnode}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Hashnode, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<HashnodeSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
					</>
				)}
				
				<Link
					prefetch={false}
					href={`https://nostr.com/nprofile1qqstefhn3k2jdey9s3awpvuthd3vymu4660xvprzrs0s9rwsrcad79cn9kyvn`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Open Nostr profile, opens in new tab"
					className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
				>
					<NostrSVG className="h-5 w-5 dark:fill-slate-200 fill-neutral-700" />
				</Link>

				{/* <Link
					prefetch={false}
					href={`/rss.xml`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Open blog XML Feed, opens in new tab"
					className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
				>
					<RssSVG className="h-5 w-5 stroke-current" />
				</Link> */}
			</div>
		</>
	);
};
