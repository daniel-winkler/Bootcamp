import { useEffect } from "react";

export default function useFetch(url, setState, state) { //useFetch es un hook que hemos creado personalizado, con los argumentos que veamos necesarios
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setState(data.results))
    }, [state]);

    // async function fetchUrl(url) {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     data.splice(20) //data.slice(0,20)
    //     setState(data)
    //   }
    //   useEffect(() => {
    //     fetchUrl(url)
    //   }, [])
}