export default function Loading(props) {

    const loaders = (loader) => {
        switch (loader) {
            case 'spinner':
                return <div className="spinner"></div>
            default:
                break;
        }
    }
    return (
        <>
            {loaders(props.loader)}
        </>
    )
}