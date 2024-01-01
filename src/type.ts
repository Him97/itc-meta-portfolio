import { ReactNode } from "react";

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
  firstname?: string;
  lastname?: string;
  phone?: string;
  email?: string;
  type?: string;
  message?: string;
}

export interface CardContentType {
    title: string;
    description: string;
    imgUrl: string;
}

export interface NewsletterProps {
  status?: string | null,
  message?: string | Error | null,
  onValidated:(formData: FormDataType) => void
}