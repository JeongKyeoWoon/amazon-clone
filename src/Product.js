import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item to basket...
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* rating 크기만큼 배열 생성 후 fill()로 초기화, map() 함수 각각 실행 */}
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
