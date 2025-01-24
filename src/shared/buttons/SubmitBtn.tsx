import { useFormStatus } from "react-dom";

interface IProps {
    title: string;
}

export default function SubmitButton({ title }: IProps) {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Submitting...' : title}
        </button>
    );
}