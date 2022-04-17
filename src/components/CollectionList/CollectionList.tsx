import { useEffect, useState } from "react"
import ReactModal from "react-modal";
import { Collection } from "../../interfaces/collection";
import { apiDeleteCollection, apiGetAll } from "../../resources/apiResources";
import CollectionItem from "../CollectionItem/CollectionItem";
import styles from './CollectionList.module.css';
import FormCollection from "../FormCollection/FormCollection";
import { useNavigate } from "react-router-dom";
import store from "../../store/store";
import { useSelector } from "react-redux";

ReactModal.setAppElement('#root');
const CollectionList = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [idToDelete, setIdToDelete] = useState('');

    let navigate = useNavigate();
    const collectionsGlobal = useSelector((state: { collections: Collection[] }) => state.collections);

    useEffect(() => {

        setCollections();
    }, [])

    // Get and render the collections
    const setCollections = () => {
        apiGetAll('GET', 'tracker')
            .then(resp => {
                store.dispatch({ type: 'GET_ALL', collections: resp });
            })
            .catch(console.error);
    }

    // Render collections from global state
    const renderCollections = () => {
        if (collectionsGlobal.length > 0) {
            let collectionItems = collectionsGlobal.map((collection: Collection, id: number) => {
                return <CollectionItem collection={collection} key={id} callEditCollection={callEditCollection} callDeleteCollection={callDeleteCollection} />
            });
            return collectionItems;
        }
    }

    const callDeleteCollection = (idC: string): void => {
        setIdToDelete(idC);
        setModalDelete(true);
    }

    const deleteCollection = () => {
        let deleteCollection = collectionsGlobal.find(e => e._id === idToDelete);
        apiDeleteCollection(idToDelete)
            .then(res => {
                store.dispatch({ type: 'DELETE', collection: deleteCollection });
            })
            .catch(console.error);

        closeModal();
    }

    const callEditCollection = (collect: Collection): void => {
        navigate("/", { state: collect })
        openModal();
    }

    const addCollection = () => {
        navigate("/", { state: {} })
        openModal();
    }

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
        setModalDelete(false);
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
                {renderCollections() ? renderCollections() : 'No data'}
            </div>

            <ReactModal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                className={styles.modal}
                contentLabel="Add collection form"
            >
                <FormCollection closeModal={closeModal} setCollections={setCollections} />
            </ReactModal>
            <ReactModal
                isOpen={modalDelete}
                onRequestClose={closeModal}
                className={styles.modalDelete}
                contentLabel="Confirmation delete"
            >
                <div className="p-5 d-flex justify-content-center">
                    <div>
                        <h4 className="text-center">Are you sure?</h4>
                        <button className="btn btn-secondary mx-1" onClick={closeModal}>Cancel</button>
                        <button className="btn btn-danger mx-1" onClick={deleteCollection}>Yes, delete</button>
                    </div>
                </div>


            </ReactModal>

        </div>
    )
}

export default CollectionList