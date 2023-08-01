 // Form input list
 export type FormInputType = {
    type: "text" | "number" | "password" | "email" | "date" | "checkbox" | "radio" | "file" | "submit" | "button" | "reset";
    placeholder?: string;
    value?: string | number | readonly string[] | undefined;
    handleValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};