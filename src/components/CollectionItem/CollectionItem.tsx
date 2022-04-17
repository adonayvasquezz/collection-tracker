import {FC} from 'react';
import { Link } from 'react-router-dom';
import { Collection } from '../../interfaces/collection';
import styles from './CollectionItem.module.css';

interface Props {
  collection: Collection;
  callEditCollection: (collection:Collection)=>void;
  callDeleteCollection: (idC:string)=>void;
};

const CollectionItem: FC<Props> = (props, {id}) => {
  return (
    <div key={id} className="col-12 col-md-6 col-lg-4 card mb-3">
      <img loading='lazy' src={props.collection.image} className={styles.imgCover} alt={props.collection.name}></img>
      <div className="card-body">
        <h5 className="card-title">{props.collection.name}</h5>
        <p className="card-text">{props.collection.description}</p>
        
      </div>
      <div className='d-flex justify-content-between mb-2'>
        <Link to={`/collection/${props.collection._id}`} state={props.collection} className="btn btn-secondary">Watch Details</Link>
        <span>
          <i className={`fas fa-edit mx-2 link-success ${styles.isClickeable}`} onClick={() => props.callEditCollection(props.collection) } />
          <i className={`fas fa-trash-alt mx-2 link-danger ${styles.isClickeable}`} onClick={() => props.callDeleteCollection(props.collection._id)}  />
        </span>
      </div>
      
      
    </div>
  )
}

export default CollectionItem
