import {FC} from 'react';
import { Collection } from '../../interfaces/collection';

interface Props {
    collection: Collection;
  };

const CollectionItem: FC<Props> = ({collection}, {id}) => {
  return (
    <div key={id}>
       Coleccion: {collection.name}
    </div>
  )
}

export default CollectionItem
