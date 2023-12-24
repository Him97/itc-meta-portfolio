import * as React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useAlertContext } from '../context/alertContext';

/**
 * This is a global component that uses context to display a global alert message.
 */
export default function AlertComponent() {
	const { isOpen, type, message, onClose, Transition } = useAlertContext();
	const isSuccess = type === 'success';

	return (
		<Snackbar
			open={isOpen}
			onClose={onClose}
			TransitionComponent={Transition}
			key={Transition.name}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
		>
			<Alert
				severity={isSuccess ? 'success' : 'error'}
				variant='filled'
				onClose={onClose}
			>
				{message}
			</Alert>
		</Snackbar>
	);
}
