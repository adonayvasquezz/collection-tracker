import { useEffect, useState } from "react"
import { Collection } from "../../interfaces/collection";
import { apiResources } from "../../resources/apiResources";
import CollectionItem from "../CollectionItem/CollectionItem";
import styles from './CollectionList.module.css';



const CollectionList = () => {

    const [collection, setCollection] = useState();

    useEffect(() => {

        setCollections();

    }, [])

    const setCollections = () => {
        apiResources('GET', 'tracker')
            .then(resp => {
                let collectionItems = resp.map((collection: Collection, id: number) => {
                    return <CollectionItem collection={collection} key={id} />
                });
                setCollection(collectionItems);
            })
            .catch(console.log);
    }


    return (
        <div className={styles.containerListCards}>
            <div className="row">
                {collection}
            </div>
        </div>

    )
}

export default CollectionList