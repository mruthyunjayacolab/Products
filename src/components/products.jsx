import '../style/product.css'
import { useNavigate, useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
const Home = () => {
    let [product, setProduct] = useState([])
    // featching the data from the database

    let Location = useLocation()
    let nav = useNavigate()
    

    let read = (id) => {
        if (Location.pathname == '/roducts') {

            nav(`${id}`)
        }
        else {
            nav(`${id}`)
        }
    }



    useEffect(() => {

        let fetchData = async () => {
            let reponce = await fetch('https://dummyjson.com/products')
            let data = await reponce.json()
            setProduct(data.products)
        }
        fetchData()
    }, [product])



    return (
        <div className="dashboard">

            <div className="Mobile bg-primary">
                <h1>Products..</h1>



                <div className="favs">
                    {
                        product.map((data) => (

                            <div className="car">

                                <img src={data.thumbnail} alt="" height="200px" width="100px" />

                                <div className="imges">
                                    <h2>{data.title}</h2>
                                    <h2>Brand:{data.brand}</h2>
                                    <h3>Price:<del>{data.price}</del></h3>
                                    <h3 className='text-danger'>Discount Price:  <span >₹{Math.trunc(data.price - data.price / 100 * data.discountPercentage)}</span></h3>
                                    <h3>Discount:{data.discountPercentage}%  </h3>
                                    <h3>Stock{data.stock}</h3>
                                    <h3>Rating{data.rating} </h3>
                                    <button onClick={() => read(data.id)} >Read more</button>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>

        </div>
    );
}

export default Home;