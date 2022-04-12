import { useEffect, useState } from "react"
import { apiResources } from "../resources/apiResources";


const CollectionList = () => {

    const [collection, setCollection] = useState({});

    useEffect(() => {
        apiResources('GET','tracker')
        .then(resp => {
            setCollection(resp);
        })
        .catch( console.log);

    }, [])
    

  return (
    <div>{JSON.stringify(collection)}</div>
  )
}

export default CollectionList