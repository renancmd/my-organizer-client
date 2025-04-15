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
        onchange?: (e) => void;
        error?: boolean;
        errorMessage?: string;
        onPress?: () => void;
    }

    interface TextLinkProps {
        name: string;
        href: string;
    }

    interface ButtonProps {
        name: string;
        onclick?: (e) => void;
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