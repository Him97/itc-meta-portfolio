import * as React from 'react';
import { AlertContext } from '../context/alertContext';

export default function useAlert() {
	const context = React.useContext(AlertContext);
	if (!context) {
		throw new Error('useAlertContext must be used within an AlertProvider');
	}
	return context;
}
