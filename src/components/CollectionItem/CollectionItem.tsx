import {FC} from 'react';
import { Link } from 'react-router-dom';
import { Collection } from '../../interfaces/collection';
import styles from './CollectionItem.module.css';

interface Props {
  collection: Collection;
};

const CollectionItem: FC<Props> = ({collection}, {id}) => {
  return (
    <div key={id} className="col-12 col-md-6 col-lg-4 card">
      <img src={collection.image} className={styles.imgCover} alt={collection.name}></img>
      <div className="card-body">
        <h5 className="card-title">{collection.name}</h5>
        <p className="card-text">{collection.description}</p>
        
      </div>
      <div className='d-flex justify-content-between mb-2'>
        <Link to="/collection" className="btn btn-secondary">Watch Details</Link>
        <span>
          <i className={`fas fa-edit mx-2 link-success ${styles.isClickeable}`} onClick={() => console.log('edited')} />
          <i className={`fas fa-trash-alt mx-2 link-danger ${styles.isClickeable}`} onClick={() => console.log('deleted')}  />
        </span>
      </div>
      
      
    </div>
  )
}

export default CollectionItem
