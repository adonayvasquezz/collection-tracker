import React, { FC, useEffect, useState } from 'react'
import { Collection } from '../../interfaces/collection';
import { apiPost } from '../../resources/apiResources';
import { currentDate } from '../../utilities';

interface Props {
    closeModal: () => void
}

const FormCollection:FC<Props> = ({ closeModal=()=>{} }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);
    const [date, setDate] = useState('');
    const [condition, setCondition] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');

    const handleSubmitForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const data:Collection = {
            name: name,
            description: description,
            category:    category,
            value:       value,
            year:        date,
            condition:   condition,
            location:    location,
            image:       image,
        };

        formRequest(data, '')
    }

    // Add or update a collection record
    const formRequest = async (data:Collection, idCollection:string) => {
        if (idCollection) {
            console.log('en PUT', idCollection);
        } else {
            apiPost(data, 'tracker')
            .then( res => console.log('Data enviada'))
            .catch(e=>console.error('Form: ', e));
        }
    }

  return (
    <>
        <div>Add new Collection</div>
        <div className="container d-flex justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 mt-5">
                <form onSubmit={handleSubmitForm}>
                    <div className="mb-3">
                        <label >Collection Name</label>
                        <input type="text" className="form-control" required id="name" 
                        onChange={ e=>setName(e.target.value) } value={name}></input>
                    </div>
                    <div className="mb-3">
                        <label >Description</label>
                        <textarea className="form-control" id="description" 
                        onChange={ e=>setDescription(e.target.value) } value={description} ></textarea>
                    </div>
                    <select className="form-select" required id="category" onChange={ e=>setCategory(e.target.value) } aria-label="collection category">
                        <option value="Music">Music</option>
                        <option value="Art" >Art</option>
                        <option value="Coin">Coins</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className="mb-3">
                        <label >Value</label>
                        <input type="number" className="form-control" id="value" min="0" max="100000"
                        onChange={ e=>setValue(parseInt(e.target.value)) } defaultValue={0}></input>
                    </div>
                    <div className="mb-3">
                        <label >Year</label>
                        <input type="date" className="form-control" id="date" max={currentDate()} /* Max date validation */
                        onChange={ e=>setDate(e.target.value) } defaultValue={date}></input>
                    </div>
                    <select className="form-select" onChange={ e=>setCondition(e.target.value) } aria-label="collection condition">
                        <option value="New">New</option>
                        <option value="Good" >Good</option>
                        <option value="Damaged">Damaged</option>
                    </select>
                    <div className="mb-3">
                        <label >Location</label>
                        <input type="text" className="form-control" id="location" 
                        onChange={ e=>setLocation(e.target.value) } value={location}></input>
                    </div>
                    <div className="mb-3">
                        <label >Online Image</label>
                        <input type="text" className="form-control" id="image" 
                        onChange={ e=>setImage(e.target.value) } value={image}></input>
                    </div>
                    
                    <div className="d-flex justify-content-center">
                    <button className="btn btn-secondary mx-2" onClick={closeModal} >Cancel</button>
                    <button type="submit" className="btn btn-success mx-2">Submit</button>
                    </div>
                   
                </form>
            </div>
        </div>
    </>
  )
}

export default FormCollection