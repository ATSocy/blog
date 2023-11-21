import Link from 'next/link';

export const Announcement = () => {
	return (
		<div className="relative isolate items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
		  <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
			<div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-frost to-lime opacity-30" style={{ clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)' }}></div>
		  </div>
		  <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
			<div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-lime to-frost opacity-30" style={{ clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)' }}></div>
		  </div>
		  <div className="flex lg:flex-row flex-col justify-center items-center gap-x-4 gap-y-2">
		  <span className="hidden lg:inline-flex rounded-md bg-fuxia/50 items-center -mr-2 px-1 text-xs text-white border border-white/50 tracking-normal">DEVZ</span>
			<p className="leading-2 text-center text-xs lg:text-base text-gray-900">
			  <strong className="font-semibold tracking-widest">Join Accelerator-Z</strong><svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Shape the future of WebZ with decentralized on-chain funding.
			</p>
			<Link
			href={'https://click.zenon.link/k2p'}
			aria-label={`Access Accelerator-Z funds`}>
			<span className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-xs lg:text-base font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Access funds &rarr;</span>
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

