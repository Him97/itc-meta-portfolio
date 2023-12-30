import * as React from 'react';
import { AlertProps } from '../type';

export const AlertContext = React.createContext<AlertProps | undefined>(
	undefined
);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [state, setState] = React.useState<AlertProps>({
		isOpen: false,
		isSuccess: false,
		message: '',
	});

	const contextValue: AlertProps = {
		...state,
		onOpen: (isSuccess, message) =>
			setState({ isOpen: true, isSuccess, message }),
		onClose: () => setState({ isOpen: false, isSuccess: false, message: '' }),
	};

	return (
		<AlertContext.Provider value={contextValue}>
			{children}
		</AlertContext.Provider>
	);
};
