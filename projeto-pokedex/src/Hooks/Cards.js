import { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState (initialData)

    useEffect(() => {
        axios
        .get(url)
        .then ((res) => {
            setData (res.data.results)
        })
        .catch ((error) => {
        alert("Ocorreu um erro, tente novamente")
         });
}, [url])

return data;

};

export default useRequestData
