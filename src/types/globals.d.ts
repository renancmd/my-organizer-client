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
    }

    interface TextLinkProps {
        name: string;
        href: string;
    }

    interface ButtonProps {
        name: string;
        onclick?: (e: any) => void;
    }
}