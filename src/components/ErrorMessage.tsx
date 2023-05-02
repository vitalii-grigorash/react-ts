interface ErrorMessageProps {
    error: string
}

export function ErrorMessage(props: ErrorMessageProps) {

    const {
        error
    } = props;

    return (
        <p className="text-center text-red-600">{error}</p>
    );
}