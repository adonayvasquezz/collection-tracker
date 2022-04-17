import { useEffect } from "react"
import { useLocation } from "react-router-dom";
import { Collection } from "../../interfaces/collection";
import styles from "./DetailCollection.module.css";
const DetailCollection = () => {

  let dataLocation = useLocation();
  let currentData = dataLocation.state as Collection;

  useEffect(() => {
    console.log(currentData);
    getYear(currentData.year);
  }, [currentData])

  const getYear = (date: string) => {
    let fullDate = new Date(date);
    let year = fullDate.getFullYear();
    console.log(year);
    return year;
  }

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 ">
          <h1 className="my-2 text-center">{currentData.name}</h1>
          <div className={styles.imgContainer}>
            <img src={currentData.image} className="img-fluid" alt={currentData.name} loading="lazy" />
          </div>
          <div className="d-flex justify-content-center my-2">
            <label className={`text-center ${styles.categoryTxt}`}>{currentData.category.toUpperCase()}</label>
          </div>
        </div>

        <div className={`col-12 col-md-6 col-lg-6 pt-lg-2 pt-3 px-4 ${styles.infoContainer}`}>
          <div className="mt-lg-5 mb-lg-3">
            <h4 className="">Description </h4>
            <p>{currentData.description}</p>
          </div>
          <div className={`row my-lg-4 py-3 ${styles.valueDateContainer}`}>
            <div className="col-12 col-lg-6">
              <span className="fs-5">Cost </span>
              <span className="fw-bold">${currentData.value}</span>
            </div>
            <div className="col-12 col-lg-6">
              <span className="fs-5">Obtained in </span>
              <span className="fw-bold">{getYear(currentData.year)}</span>
            </div>
          </div>

          <div className="my-lg-4">
            <h4 className="">Location </h4>
            <p>{currentData.location}</p>
          </div>
          <div className="my-lg-4">
            <h4 className="">Condition </h4>
            <p>{currentData.condition}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCollection