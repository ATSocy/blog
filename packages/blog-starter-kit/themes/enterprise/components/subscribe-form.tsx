import request from 'graphql-request';
import { useRef, useState } from 'react';
import {
	SubscribeToNewsletterDocument,
	SubscribeToNewsletterMutation,
	SubscribeToNewsletterMutationVariables,
	SubscribeToNewsletterPayload,
} from '../generated/graphql';
import { useAppContext } from './contexts/appContext';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

export const SubscribeForm = () => {
	const [status, setStatus] = useState<SubscribeToNewsletterPayload['status']>();
	const [requestInProgress, setRequestInProgress] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const { publication } = useAppContext();

	const subscribe = async () => {
		const email = inputRef.current?.value;
		if (!email) return;

		setRequestInProgress(true);

		try {
			const data = await request<
				SubscribeToNewsletterMutation,
				SubscribeToNewsletterMutationVariables
			>(GQL_ENDPOINT, SubscribeToNewsletterDocument, {
				input: { publicationId: publication.id, email },
			});
			setRequestInProgress(false);
			setStatus(data.subscribeToNewsletter.status);
		} catch (error) {
			const message = (error as any).response?.errors?.[0]?.message;
			if (message) {
				window.alert(message);
			}
			setRequestInProgress(false);
		}
	};
	return (
		<>
		<div className="w-full">
			{!status && (
				<div className="relative rounded-full p-2">
					<input
						ref={inputRef}
						type="email"
						placeholder="hal@finney.com"
						className="focus:outline-fuxia left-3 top-3 rounded-full  w-full border p-3 text-base text-black dark:bg-zinc-200"
					/>
					<button
						disabled={requestInProgress}
						onClick={subscribe}
						className="bg-fuxia dark:bg-fuxia absolute right-3 top-3 uppercase rounded-full px-3 py-2 text-white disabled:cursor-not-allowed disabled:opacity-80"
					>
						subscribe
					</button>
				</div>
			)}
			{status === 'PENDING' && (
				<div className="relative p-2 text-center">
					<p className="font-bold text-green-600 dark:text-green-500">Almost there!</p>
					<p className="font-medium mt-2 text-slate-600 dark:text-neutral-300">
						Check your inbox for a confirmation email and click{' '}
						<strong>&quot;Confirm and Subscribe&quot;</strong> to complete your subscription.
						<p>Thanks for joining us! </p>
					</p>
				</div>
			)}
			</div>
		</>
	);
};
