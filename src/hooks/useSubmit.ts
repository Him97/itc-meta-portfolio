import * as React from 'react';
import { Response, FormDataType as data } from '../type';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
export default function useSubmit() {
	const [isLoading, setLoading] = React.useState<boolean>(false);
	const [response, setResponse] = React.useState<Response>();

	const submit = async (_url: string, data: data) => {
		const random = Math.random();
		setLoading(true);
		try {
			await wait(2000);
			if (random < 0.5) {
				throw new Error('Something went wrong');
			}
			setResponse({
				isSuccess: true,
				message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
			});
		} catch (error) {
			setResponse({
				isSuccess: false,
				message: 'Something went wrong, please try again later!',
			});
		} finally {
			setLoading(false);
		}
	};

	return { isLoading, response, submit };
}
