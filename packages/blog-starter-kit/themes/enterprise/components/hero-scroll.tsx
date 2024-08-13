'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerScroll } from './ui/container-scroll-animation';
import ShinyButton from './ui/shiny-button';

export function HeroScroll() {
	return (
		<div className="flex flex-col overflow-hidden">
			<ContainerScroll
				titleComponent={
					<div className="flex flex-col space-y-5">
						<h1 className="md:-mt-30  mb-4  text-4xl font-semibold text-black dark:text-white md:text-[4rem]">
							Aliens, step up.{' '}
						</h1>
						<h1 className="mt-2 text-4xl font-bold leading-none md:mt-10 md:text-[6rem]">
							Answer the call.
						</h1>
						<div>
							<Link href="https://base.atsocy.com">
								<ShinyButton className="my-5 md:my-20" text="JOIN ATS.Base" />
							</Link>
						</div>
					</div>
				}
			>
				<Image
					src={`/assets/images/base-screenshot.png`}
					alt="hero"
					height={720}
					width={1400}
					className="mx-auto h-full rounded-2xl object-cover object-center"
					draggable={false}
				/>
			</ContainerScroll>
		</div>
	);
}
