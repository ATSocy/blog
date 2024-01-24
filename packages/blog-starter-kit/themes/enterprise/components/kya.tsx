import Link from 'next/link';
import QuestionMarkSVG from './icons/svgs/QuestionMarkSVG';
import { PostFragment } from '../generated/graphql';
import Image from 'next/image';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

export const KnowYourAlienAvatars = ( { posts, context }: Props) => {
	return (
		<div className="w-full">
			<div className="relative group">
		  		<div className="flex overflow-hidden space-x-4">
				    <Link href={`/${posts[0].slug}`}>
						<div className="flex-shrink-0 p-1 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
							<div>
								<span className="rounded-md px-1 py-2 flex items-center justify-center text-neutral-500 text-xs">
									Contributor
								</span>
							</div>
							<div className="w-20 h-20 mx-auto relative">
								<Image
									alt="Profile picture of Stark of Zenon"
									className="rounded-full border-2 border-lime transition duration-300 ease-in-out transform group-hover:shadow"
									height="96"
									src="/assets/blog/kya/Stark_of_Zenon.jpg"
									style={{
										aspectRatio: "96/96",
										objectFit: "cover",
									}}
									width="96"
								/>
							</div>
							<p className="text-center mt-2 dark:text-white font-semibold">Stark of Zenon</p>
							<p className="text-center mt-1 text-sm text-gray-500">Zenon Core</p>
						</div>
					</Link>
			  {/* <div className="w-20 h-20 mx-auto relative  ">
				<img
				  alt="a hooded sloth profile picture"
				  className="rounded-full border-2 border-lime transition duration-300 ease-in-out transform group-hover:shadow"
				  height="96"
				  src="/assets/blog/kya/digitalsloth.jpeg"
				  style={{
					aspectRatio: "96/96",
					objectFit: "cover",
				  }}
				  width="96"
				/>

			  </div>
			  <p className="text-center mt-2 dark:text-white font-semibold">Digital Sloth</p>
			  <p className="text-center mt-1 text-sm text-gray-500">Zenon Hub</p>
			  
			</div> */}
			
			<div className="flex-shrink-0 p-1 opacity-50">
			<div>
				<span className="rounded-md px-1 py-2 flex items-center justify-center text-neutral-500 text-xs invisible">
				  ?
				</span>
				</div>
				<div className="w-20 h-20 mx-auto relative">	
				<div className="rounded-full border-2 w-20 h-20 dark:bg-neutral-600 bg-neutral-300 border-neutral-400">
				<QuestionMarkSVG className="dark:fill-slate-200 fill-black w-14 h-14 pt-4 ml-3 mt-1" />
				</div>	
			  </div>
			  <p className="text-center mt-2 dark:text-white font-semibold"></p>
			  <p className="text-center mt-1 text-sm text-gray-500"></p>
			</div>
			<div className="flex-shrink-0 p-1 opacity-25">
			<div>
				<span className="rounded-md px-1 py-2 flex items-center justify-center text-neutral-500 text-xs invisible">
				  ?
				</span>
				</div>
				<div className="w-20 h-20 mx-auto relative">
				<div className="rounded-full border-2 w-20 h-20 dark:bg-neutral-600 bg-neutral-300 border-neutral-400">
				<QuestionMarkSVG className="dark:fill-neutral-200 fill-black w-14 h-14 pt-4 ml-3 mt-1" />
				</div>		
				
			  </div>
			  <p className="text-center mt-2 dark:text-white font-semibold"></p>
			  <p className="text-center mt-1 text-sm text-gray-500"></p>
			</div>
		  </div>

		</div>
	  </div>
	)
  }
  