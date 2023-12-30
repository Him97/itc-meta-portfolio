export interface Response {
    message: string;
    isSuccess: boolean;
}

export interface AlertProps extends Response {
	isOpen?: boolean;
	onOpen?: (isSuccess: boolean, message: string) => void;
	onClose?: () => void;
}

export interface FormDataType {
  firstName?: string;
  email?: string;
  type?: string;
  comment?: string;
}

export interface CardContentType {
    title: string;
    description: string;
    imageSrc: string;
}