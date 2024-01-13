const FetchError = (props) => {
    const {fetchError} = props;
    console.log(fetchError);
    return(
        <div className="flex items-center">
        <h1 className="font-bold text-red-300"> Error code: {fetchError}</h1>
            <h2 className="font-bold text-red-300">Please install CORS allow extension in your browser for calling restricted live APIs</h2>
        </div>

    )
}
export default FetchError;