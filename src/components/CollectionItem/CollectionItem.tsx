import {FC} from 'react';
import { Collection } from '../../interfaces/collection';
import styles from './CollectionItem.module.css';

interface Props {
    collection: Collection;
  };

const CollectionItem: FC<Props> = ({collection}, {id}) => {
  return (
    <div key={id} className="col-6 col-md-4 col-lg-4 card">
      <img src={collection.image} className={styles.imgCover} alt={collection.name}></img>
      <div className="card-body">
        <h5 className="card-title">{collection.name}</h5>
        <p className="card-text">{collection.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default CollectionItem
