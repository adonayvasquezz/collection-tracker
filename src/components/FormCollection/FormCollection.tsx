import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Collection, CollectionForm } from '../../interfaces/collection';
import { apiPostCollection } from '../../resources/apiResources';
import { currentDate } from '../../utilities';

interface Props {
    closeModal: () => void
}

const FormCollection:FC<Props> = ({ closeModal=()=>{} }) => {

    let dataLocation = useLocation();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);
    const [date, setDate] = useState('');
    const [condition, setCondition] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        let currentData = dataLocation.state as Collection;
        if (currentData.name !== undefined) {
            setName(currentData.name);
            setDescription(currentData.description);
            setCategory(currentData.category);
            setValue(currentData.value);
            setDate(currentData.year);
            setCondition(currentData.condition);
            setLocation(currentData.location);
            setImage(currentData.image);
            console.log('la fecha es ', currentData.year );
        }
        
    }, [dataLocation.state])

    const handleSubmitForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const data:CollectionForm = {
            name: name,
            description: description,
            category:    category,
            value:       value,
            year:        date!==null ? date : '',
            condition:   condition,
            location:    location,
            image:       image,
        };

        formRequest(data, '')
        closeModal();
    }

    // Add or update a collection record
    const formRequest = async (data:CollectionForm, idCollection:string) => {
        if (idCollection) {
            console.log('en PUT', idCollection);
        } else {
            apiPostCollection(data)
            .then( res => console.log('Data enviada'))
            .catch(e=>console.error('Form: ', e));
        }
    }

  return (
    <>
        <div className='pt-4 px-5 fs-3 fw-bold'>Add new Collection</div>
        <div className="container d-flex justify-content-center px-5">
            
            <div className="col-12 mt-3 ">
                <form onSubmit={handleSubmitForm}>
                    <div className='row'>
                        <div className="mb-1 mb-lg-3 col-12 col-lg-6">
                            <label >Collection Name</label>
                            <input type="text" className="form-control" required id="name" 
                            onChange={ e=>setName(e.target.value) } value={name}></input>
                        </div>
                        <div className="mb-1 mb-lg-3 col-12 col-lg-6">
                            <label >Description</label>
                            <textarea className="form-control" id="description" 
                            onChange={ e=>setDescription(e.target.value) } value={description} ></textarea>
                        </div>
                        <div className="mb-1 mb-lg-3 col-12 col-lg-6">
                            <label >Category</label>
                            <select className="form-select" required id="category" onChange={ e=>setCategory(e.target.value) } value={category} aria-label="collection category">
                                <option value="Music">Music</option>
                                <option value="Art" >Art</option>
                                <option value="Coin">Coins</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-1 mb-lg-3 col-12 col-lg-6">
                            <label >Value</label>
                            <input type="number" className="form-control" id="value" min="0" max="100000"
                            onChange={ e=>setValue(parseInt(e.target.value)) } value={value}></input>
                        </div>
                        <div className="mb-1 mb-lg-3 col-12 col-lg-6">
                            <label >Year</label>
                            <input type="date" className="form-control" id="date" max={currentDate()} /* Max date validation */
                            onChange={ e=>setDate(e.target.value) } ></input>
                        </div>
                        <div className="mb-1 mb-lg-3 col-12 col-lg-6">
                            <label >Condition</label>
                            <select className="form-select" onChange={ e=>setCondition(e.target.value) } value={condition} aria-label="collection condition">
                                <option value="New">New</option>
                                <option value="Good" >Good</option>
                                <option value="Damaged">Damaged</option>
                            </select>
                        </div>
                        <div className="mb-1 mb-lg-3 col-12 col-lg-6">
                            <label >Location</label>
                            <input type="text" className="form-control" id="location" 
                            onChange={ e=>setLocation(e.target.value) } value={location}></input>
                        </div>
                        <div className="mb-1 mb-lg-3 col-12 col-lg-6">
                            <label>Online Image URL</label>
                            <input type="text" className="form-control" id="image" 
                            onChange={ e=>setImage(e.target.value) } value={image}></input>
                        </div>
                        
                        <div className="d-flex justify-content-center my-2">
                            <button className="btn btn-secondary mx-2" onClick={closeModal} >Cancel</button>
                            <button type="submit" className="btn btn-success mx-2">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default FormCollection