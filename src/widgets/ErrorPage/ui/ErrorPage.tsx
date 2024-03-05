interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({}: ErrorPageProps) => {
    const errorMessage: string = 'Нет такой страницы'

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorMessage}</i>
            </p>
        </div>
    );
};