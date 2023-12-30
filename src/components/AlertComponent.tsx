import * as React from 'react';
import { Snackbar, Alert } from '@mui/material';
import useAlert from '../hooks/useAlert';

/**
 * This is a global component that uses context to display a global alert message.
 */
export default function AlertComponent() {
	const { isSuccess, message } = useAlert();
	const cancelRef = React.useRef();

	return (
		<Snackbar open={true} autoHideDuration={6000} ref={cancelRef}>
			<Alert severity={isSuccess ? 'success' : 'error'} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	);
}
