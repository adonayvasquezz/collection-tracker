import { useEffect, useState } from "react"
import { Collection } from "../interfaces/collection";
import { apiResources } from "../resources/apiResources";
import CollectionItem from "./CollectionItem/CollectionItem";


const CollectionList = () => {

    const [collection, setCollection] = useState();

    useEffect(() => {
        apiResources('GET','tracker')
        .then(resp => {
            

            let collectionItems = resp.map((collection:Collection, id:number) => {
                return <CollectionItem  collection={collection} key={id} />
            });
            setCollection(collectionItems);
        })
        .catch( console.log );

    }, [])
    

  return (
    <div>{collection}</div>
  )
}

export default CollectionList