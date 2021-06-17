import useFetch from "./UseFetch";

export default function Fetch({
    uri,
    renderSuccess,
    loadingFallback=<p>loading...</p>,
    renderErorr=error=><pre>{JSON.stringify(error, null, 2)}</pre>
}){
    const {loading, data, error}= useFetch(uri);
    if(loading) return loadingFallback;
    if(error) return renderErorr(error);
    if(data)  return renderSuccess({data});
}