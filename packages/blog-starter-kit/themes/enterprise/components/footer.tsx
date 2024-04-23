import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import AtsocyLogoSVG from './icons/svgs/AtsocyLogoSVG';
import { Separator } from './ui/separator';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="py-10 lg:py-20">

				<div className="h-full">
					<div className="grid dark:text-slate-200 text-center items-center gap-2 lg:gap-2 justify-center lg:col-span-2">
						<div className="flex justify-center">
							<AtsocyLogoSVG className="dark:fill-neutral-300 fill-black " />
							</div>
							<Separator/>
							<p>&copy; 2024 Alien Trap Society</p>
							<Separator/>
							
							<div className="flex justify-center">
							<SocialLinks />
							</div>
						</div>
					</div>		

		</footer>
	);
};
