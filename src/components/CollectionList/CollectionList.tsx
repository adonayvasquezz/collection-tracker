import { useEffect, useState } from "react"
import ReactModal from "react-modal";
import { Collection } from "../../interfaces/collection";
import { apiResources } from "../../resources/apiResources";
import CollectionItem from "../CollectionItem/CollectionItem";
import styles from './CollectionList.module.css';
import { modalStyles } from '../../utilities';


ReactModal.setAppElement('#root');
const CollectionList = () => {

    const [collection, setCollection] = useState();
    const [modalOpen, setModalOpen] = useState(false);

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

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className={styles.containerListCards}>

            <div className={styles.buttonContainer}>
                <button className={`btn btn-warning ${styles.addButton}`} 
                        type="button"
                        onClick={openModal}>
                    Agregar Colección
                </button>
            </div>

            <div className="row">
                {collection ? collection : 'No data'}
            </div>

            <ReactModal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Add collection form"
            >
                <button onClick={closeModal}>close</button>
                <div>Testing modal</div>
                <form>
                    <input />
                </form>
            </ReactModal>
        </div>
    )
}

export default CollectionList