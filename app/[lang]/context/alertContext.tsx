'use client';
import * as React from 'react';
import Slide, { SlideProps } from '@mui/material/Slide';

type TransitionProps = Omit<SlideProps, 'direction'>;
function TransitionDown(props: TransitionProps) {
	return <Slide {...props} direction='down' />;
}

interface AlertContextProps {
	isOpen: boolean;
	type: string;
	message: string;
	onOpen: (type: string, message: string) => void;
	onClose: () => void;
	Transition: React.ComponentType<
		TransitionProps & {
			children: React.ReactElement<any, any>;
		}
	>;
}

const AlertContext = React.createContext<AlertContextProps | undefined>(
	undefined
);

interface AlertProviderProps {
	children: React.ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
	const [state, setState] = React.useState({
		isOpen: false,
		type: 'success',
		message: '',
	});

	return (
		<AlertContext.Provider
			value={{
				...state,
				onOpen: (type, message) => setState({ isOpen: true, type, message }),
				onClose: () => setState({ isOpen: false, type: '', message: '' }),
				Transition: TransitionDown,
			}}
		>
			{children}
		</AlertContext.Provider>
	);
};

export const useAlertContext = (): AlertContextProps => {
	const context = React.useContext(AlertContext);
	if (!context) {
		throw new Error('useAlertContext must be used within an AlertProvider');
	}
	return context;
};
