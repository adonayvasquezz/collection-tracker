import { useEffect, useState } from "react"
import ReactModal from "react-modal";
import { Collection } from "../../interfaces/collection";
import { apiDeleteCollection, apiGetAll } from "../../resources/apiResources";
import CollectionItem from "../CollectionItem/CollectionItem";
import styles from './CollectionList.module.css';
import FormCollection from "../FormCollection/FormCollection";
import { useNavigate } from "react-router-dom";
import store from "../../store/store";

ReactModal.setAppElement('#root');
const CollectionList = () => {

    const [collection, setCollection] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {

        setCollections();

    }, [])

    // Get and render the collections
    const setCollections = () => {
        apiGetAll('GET', 'tracker')
            .then(resp => {
                if (resp.length>0) {
                    let collectionItems = resp.map((collection: Collection, id: number) => {
                        return <CollectionItem collection={collection} key={id} callEditCollection={callEditCollection} callDeleteCollection={callDeleteCollection} />
                    });
                    setCollection(collectionItems);
                    store.dispatch({type: 'GET_ALL', collections: resp});
                } 
            })
            .catch(console.error);
    }

    const callDeleteCollection = (idC:string):void => {
        apiDeleteCollection(idC);
        setCollections();
    }

    const callEditCollection = (collect:Collection):void => {
        navigate("/", {state: collect})
        openModal();
    }

    const addCollection = () => {
        navigate("/", {state: {}})
        openModal();
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
                        onClick={addCollection}>
                    Agregar Colección
                </button>
            </div>

            <div className="row">
                {collection ? collection : 'No data'}
            </div>

            <ReactModal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                className={styles.modal}
                contentLabel="Add collection form"
            >
                <FormCollection closeModal = {closeModal} />
            </ReactModal>
        </div>
    )
}

export default CollectionList