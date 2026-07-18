
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products.json"
import { imageMap } from "./ProductList";

const ProductInfo = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    //상품 목록을 조회하여 특정 상품을 가져오기
    // http://localhost:5173/products/2, '2'는 문자라서 숫자로 변환
    const product = products.find((p: any) => p.id === Number(id));

    if(!product){
        return <p>상품을 찾을 수 없습니다.</p>
    }

    return(
        <div className="product-info">
            <h3>{product.name}</h3>
            <div className="product-details">
                <img 
                    src={imageMap[product.image]} 
                    alt={product.name} 
                />
                <div className="product-content">
                    <p>{product.description}</p>
                    <p className="price">가격: {product.price}원</p>
                    <div className="product-buttons">
                        <button
                           onClick={() => navigate('/products')} 
                           className="btn-list"
                        >
                            목록으로
                        </button>
                        <button className="btn-cart">장바구니에 추가</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;