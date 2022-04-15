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

    // Get and render the collections
    const setCollections = () => {
        apiResources('GET', 'tracker')
            .then(resp => {
                if (resp.length>0) {
                    let collectionItems = resp.map((collection: Collection, id: number) => {
                        return <CollectionItem collection={collection} key={id} />
                    });
                    setCollection(collectionItems);
                } 
            })
            .catch(console.error);
    }

    return (
        <div className={styles.containerListCards}>
            <div className={styles.buttonContainer}>
                <button className={`btn btn-warning ${styles.addButton}`} type="button">Agregar Colección</button>
            </div>
            <div className="row">
                {collection ? collection : 'No data'}
            </div>
        </div>
    )
}

export default CollectionList