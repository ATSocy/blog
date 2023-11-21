import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import AtsocyLogoSVG from './icons/svgs/AtsocyLogoSVG';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-10 lg:py-20 dark:border-neutral-800 ">
			<Container className="px-5">
				{/* {PUBLICATION_LOGO ? (
					<div className="mb-20 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)} */}

				

					<div className="grid grid-cols-1 lg:grid-cols-4 gap-5 h-full">
						<div className="col-span-full md:col-span-1 lg:col-span-1 flex flex-col justify-between items-center">
							<p className="mb-3 font-semibold text-slate-600 dark:text-neutral-200 text-center">
								Alien Trap Society
							</p>
							<ul className="flex flex-col  gap-1 text-slate-700 dark:text-neutral-300 items-center">
								<li>
									<a href="#" className="hover:underline">
										Who we are
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										What we do
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Our mission
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Join us
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-full md:col-span-1 lg:col-span-1 flex flex-col justify-between items-center">
							<p className="mb-3 font-semibold text-slate-600 dark:text-neutral-200 text-center">Zenon Network</p>
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300 items-center">
								<li>
								<Link
									href={'https://click.zenon.link/0zd'}
									aria-label={`Learn more about Zenon Network`}>
									<span className="hover:underline">
										Learn
									</span>
								</Link>	
								</li>
								<li>
								<Link
									href={'https://github.com/zenon-network/syrius'}
									aria-label={`syrius wallet github repository`}>
									<span className="hover:underline">
										s y r i u s 
									</span><span className="bg-neutral-50 absolute text-fuxia border border-fuxia mt-0.5 text-xs tracking-wider me-2 px-2.5 py-0.5 rounded-full dark:bg-stone-950 dark:text-lime dark:border-lime ml-2">wallet</span>
								</Link>	
								</li>
								<li>
								<Link
									href={'https://forum.zenon.org'}
									aria-label={`zenon.org public forum`}>
									<span className="hover:underline">
										Forum
									</span>
								</Link>	
								</li>

								<li>
								<Link
									href={'https://zenonhub.io'}
									aria-label={`Zenon Hub Explorer`}>
									<span className="hover:underline">
										Explorer
									</span>
								</Link>	
								</li>
							</ul>
						</div>
						<div className="grid dark:text-slate-200 text-center items-center gap-2 lg:gap-2 justify-center lg:col-span-2">
							<div className="flex justify-center">
								<AtsocyLogoSVG className="dark:fill-neutral-300 fill-black " />
							</div>
							<p>&copy; 2023 Alien Trap Society</p>
							
							<p>
								<a href="#" className="hover:underline text-center">
									Privacy Policy
								</a>{' '}
								·{' '}
								<a href="#" className="hover:underline">
									Terms
								</a>
							</p>
							<div className="flex justify-center">
							<SocialLinks />
							</div>
						</div>
						

						{/* <div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Product</p>
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
								<li>
									<a href="#" className="hover:underline">
										Pricing
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Documentation
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Integrations
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Support
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-1">
							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Other links</p>
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
								<li>
									<a href="#" className="hover:underline">
										Events
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Careers
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Newsroom
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										About us
									</a>
								</li>
							</ul>
						</div> */}

					</div>
					

			</Container>
		</footer>
	);
};
