

function Alert({ message, type }: { message: string; type: 'success' | 'error' }) {
    return (
        <div className={`alert ${type}`}>
            <p>{message}</p>
        </div>
    );
}

export default Alert;