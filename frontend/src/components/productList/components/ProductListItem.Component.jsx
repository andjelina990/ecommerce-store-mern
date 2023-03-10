import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {addToCart} from '../../../redux/cart.slicer';
import ButtonComponent from "../../../UIkit/Button.Component";

const ProductListItemComponent = (props) => {
    const {product, isEditMode} = props
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(isEditMode);
    }, [isEditMode])

    const onRedirect = () => {
        if (isEditMode)
            return navigate(`/product/${product._id}/edit`)
        // todo: add to cart
    }

    //todo: on click redirect to /product/:id
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 zu-product-item-wrapper">
            <Link to={`/productDetails/${product._id}`}>
                <img className="img img-fluid"
                     src={product.imgUrl || "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png"}
                     alt="placeholder img"/>
                <p className="zu-product-item-name">{product.title}</p>
                <p className="zu-product-item-price">${product.price}</p>
            </Link>
            {
                isEditMode ? (
                    <button className="zu-product-item-btn" onClick={() => onRedirect()}>
                        Edit
                    </button>
                ) : (
                    // <button
                    //     className='zu-product-item-btn'
                    //     onClick={() => dispatch(addToCart(product))}>
                    //     Add to cart
                    // </button>
                    <ButtonComponent
                        btnText="Add to cart"
                        btnClick={() => dispatch(addToCart(product))}
                    />
                )
            }

        </div>
    )
}

export default ProductListItemComponent;
