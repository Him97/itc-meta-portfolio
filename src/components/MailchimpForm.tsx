import * as React from 'react';
import dotenv from 'dotenv';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Newsletter from './Newsletter';

export default function MailchimpForm() {
	//const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

	return (
		<React.Fragment>
			<MailchimpSubscribe
				url='http://localhost:3000'
				render={({ subscribe, status, message }) => (
					<Newsletter
						status={status}
						message={message}
						onValidated={(formData) => subscribe(formData)}
					/>
				)}
			/>
		</React.Fragment>
	);
}
