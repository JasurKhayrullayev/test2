import {useState, useEffect} from 'react';
const useFetchData = (ENDPOINT) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function(){
      try{
          setIsLoading(true)
          const response = await fetch(process.env.REACT_APP_BASE_URL + ENDPOINT)
          const dataRes = await response.json();
          setData(dataRes)
        }
        catch(error){
        console.log(error);
        }finally{
        setIsLoading(false)
        }
      })();
  }, [ENDPOINT])

  return [data, isLoading]
}

export default useFetchData