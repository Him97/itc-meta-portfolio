import * as React from 'react';

const wait = (ms: number) =>
	new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */

interface Response {
	type: 'success' | 'error';
	message: string;
}

interface SubmitHook {
	isLoading: boolean;
	response: Response | null;
	submit: (url: string, data: any) => Promise<void>;
}

export default function useSubmit(): SubmitHook {
	const [isLoading, setLoading] = React.useState<boolean>(false);
	const [response, setResponse] = React.useState<Response | null>(null);

	const submit = async (url: string, data: any): Promise<void> => {
		const random = Math.random();
		setLoading(true);

		try {
			await wait(2000);

			if (random < 0.5) {
				throw new Error('Something went wrong');
			}

			setResponse({
				type: 'success',
				message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
			});
		} catch (error) {
			setResponse({
				type: 'error',
				message: 'Something went wrong, please try again later!',
			});
		} finally {
			setLoading(false);
		}
	};

	return { isLoading, response, submit };
}
