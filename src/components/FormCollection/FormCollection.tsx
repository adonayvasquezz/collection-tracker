import React, { FC, useState } from 'react'
import { Collection } from '../../interfaces/collection';
import { apiPost } from '../../resources/apiResources';

interface Props {
    closeModal: () => void
}

const FormCollection:FC<Props> = ({ closeModal=()=>{} }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleName = (e: { target: { value: string }; }) => {
        setName(e.target.value);
    }
    const handleDescription = (e: { target: { value: string }; }) => {
        setDescription(e.target.value);
    }

    const handleSubmitForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const data:Collection = {
            name: name,
            description: description,
            category:    'string',
            value:       5,
            year:        Date.now().toString(),
            condition:   'string',
            location:    'string',
            image:       'string',
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
                        <label className="form-label">Collection Name</label>
                        <input type="text" className="form-control" required id="name" onChange={handleName} value={name}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" id="description" onChange={handleDescription} value={description} ></textarea>
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