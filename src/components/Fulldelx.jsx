import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
const Fulldelx = () => {
    let [products, setproduct] = useState([])

    let param = useParams()
    console.log(param.id);


    useEffect(() => {

        let fetchdata = async () => {
            let reponce = await fetch(`https://dummyjson.com/products/${param.id}`)
            let data = await reponce.json()
            setproduct(data)
        }
        fetchdata()

    }, [])

    return (
        <div className="favs">
            {
                

                    <div className="car">

                        <img src={products.thumbnail} alt="" height="200px" width="100px" />

                        <div className="imges">
                            <h2>{products.title}</h2>
                            <h2>Brand:{products.brand}</h2>
                            <h3>Price:<del>{products.price}</del></h3>
                            <h3>Price:{products.price - products.price / 100 * products.discountPercentage}</h3>
                            <h3>Discount:{products.discountPercentage}%</h3>
                            <h3>Stock{products.stock}</h3>
                            <h3>Rating{products.rating} </h3>
                            {/* <img src={products.images[0]} alt="" /> */}
                            {/* <img src={products.images[2]} alt="" /> */}
                            {/* <img src={products.images[1]} alt="" /> */}
                            {/* <button onClick={() => read(data.id)} >Read more</button> */}

                        </div>
                    </div>

               
            }
        </div>

    );
}

export default Fulldelx;