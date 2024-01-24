import Link from 'next/link';

export const Announcement = () => {
	return (
		<div className="relative isolate items-center overflow-hidden bg-gray-50 dark:bg-gray-950 px-4 py-4 sm:px-3.5 ">
		  <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
			<div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-lime dark:from-violet-900 to-lime dark:opacity-80 opacity-30" style={{ clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)' }}></div>
		  </div>
		  <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
			<div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-lime to-lime dark:from-fuxia  dark:to-violet-900 opacity-30 dark:opacity-30" style={{ clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)' }}></div>
		  </div>
		  <div className="flex lg:flex-row flex-col justify-center items-center gap-x-3 gap-y-1 -mt-2">
		  {/* <span className="hidden lg:inline-flex rounded-md bg-fuxia/50 items-center -mr-2 px-1 text-xs text-white border border-white/50 tracking-normal">DEVZ</span> */}
			<p className="text-center text-xs lg:text-base text-gray-900 dark:text-neutral-200">
			  <strong className="font-semibold tracking-wide hidden lg:flex ">Join Accelerator-Z</strong></p>
			<p className=" dark:text-neutral-200 text-xs lg:text-base">Shape the future of WebZ with decentralized on-chain funding.</p>
			
			<Link
			href={'https://click.zenon.link/k2p'}
			aria-label={`Access Accelerator-Z funds`}>
			<span className="outline rounded outline-1 dark:text-white lg:text-[11px] text-[10px] tracking-widest font-bold px-3 py-1 hover:bg-fuxia hover:text-white hover:outline-white dark:hover:bg-violet-800">ACCESS FUNDS &rarr;</span>
			</Link>


		  </div>
		  {/* <div className="flex flex-1 justify-end">
			<button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" aria-label="Dismiss announcement">
			  <span className="sr-only">Dismiss</span>
			  <svg className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
			  </svg>
			</button>
		  </div> */}
		</div>
	  );
	};

