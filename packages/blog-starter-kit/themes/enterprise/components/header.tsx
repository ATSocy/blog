import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import HamburgerSVG from './icons/svgs/HamburgerSVG';
import { PublicationLogo } from './publication-logo';
import PublicationSidebar from './sidebar';
import { Announcement } from './announcement';
import AtsocySVG from './icons/svgs/AtsocySVG';
import Link from 'next/link';
import ThemeToggle from './theme-toggle';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>();
	const { publication } = useAppContext();
	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);
	const visibleItems = navbarItems.slice(0, 3);
	const hiddenItems = navbarItems.slice(3);

	const toggleSidebar = () => {
		setIsSidebarVisible((prevVisibility) => !prevVisibility);
	};

	const navList = (
		<ul className="flex flex-row items-center gap-2 font-semibold text-white">
			{visibleItems.map((item) => (
				<li key={item.url}>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className="transition-200 block max-w-[200px] truncate text-ellipsis whitespace-nowrap rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
					>
						{item.label}
					</a>
				</li>
			))}

			{hiddenItems.length > 0 && (
				<li>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<button className="transition-200 block rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white">
								More
							</button>
						</DropdownMenu.Trigger>

						<DropdownMenu.Portal>
							<DropdownMenu.Content
								className="w-48 rounded border border-gray-300 bg-white text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
								align="end"
								sideOffset={5}
							>
								{hiddenItems.map((item) => (
									<DropdownMenu.Item asChild key={item.url}>
										<a
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											className="transition-200 block truncate p-2 transition-colors hover:bg-slate-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
										>
											{item.label}
										</a>
									</DropdownMenu.Item>
								))}
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</li>
			)}
		</ul>
	);

	return (
<header className="border-b  border-neutral-200 bg-zinc-100 py-2 dark:border-zinc-900 dark:bg-stone-950">
    <Container className="flex px-1 ">
        <div className="flex items-center w-full">
            {/* <div className="mr-2">
                <Button
                    type="outline"
                    label=""
                    icon={<HamburgerSVG className="h-5 w-5 stroke-current" />}
                    className="rounded-lg border border-zinc-200 !px-3 !py-2 text-zinc-600 dark:text-white hover:bg-zinc-200 dark:hover:bg-slate-900 dark:hover:bg-neutral-800"
                    onClick={toggleSidebar}
                />

                {isSidebarVisible && (
                    <PublicationSidebar navbarItems={navbarItems} toggleSidebar={toggleSidebar} />
                )}
            </div> */}
			<div className="flex-grow grid grid-cols-3 items-center w-full">
			<div></div>
			<Link
				href={'/'}
				aria-label={`${publication.title} home page`}
				className="justify-self-center">
							
            <AtsocySVG className="dark:fill-neutral-300 fill-black h-[20px] min-h-[20px]" />
			</Link>
			<div className="justify-self-end">
			<ThemeToggle />
			</div>
			
			
			</div>
        </div>
				
				{/* <div className="flex flex-row items-center justify-end gap-5 text-slate-300">
					<nav className="hidden">{navList}</nav> 
					<Button href={baseUrl} as="a" type="primary" label="Book a demo" /> 
				</div>*/}
								
			</Container>
		
		</header>
		

);
};
