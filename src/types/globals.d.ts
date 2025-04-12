export {InputProps, TextLinkProps, ButtonProps};

declare global {
    interface InputProps {
        placeholder: string;
        label?: string;
        showLabel: boolean;
        className?: string;
        type: string;
        value?: string;
        disable?: boolean;
        onchange?: (e: any) => void;
        error?: boolean;
        errorMessage?: string;
    }

    interface TextLinkProps {
        name: string;
        href: string;
    }

    interface ButtonProps {
        name: string;
        onclick?: (e: any) => void;
    }

    interface ModalProps {
        isOpen: boolean;
        onClose?: () => void;
        question: string;
        confirmText?: string;
        cancelText?: string;
        onConfirm?: () => void;
        onCancel?: () => void;
      }
}