import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//상품추가 폼데이터 인터페이스 정의
interface FormData{
    name: string,
    price: number,
    description: string,
    image: File | null
}

const AddProduct =() => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        price: 0,
        description: "",
        image: null       
    });

    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = e.target;
        const files = (e.target as HTMLInputElement).files;

        if(name === 'image' && files){
            setFormData({...formData, image: files[0]});

        }else{
            setFormData({...formData, [name]:value});
        }
    }

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        const {name, price, description, image} = formData;

        if(!name || !price || !description){
            alert("모든 항목을 입력하세요");
            return;
        }
        console.log("formData: ", formData);
        alert("상품이 등록되었습니다");
        navigate('/products');   
    }


    return(
        <div className="add-product">
            <h3>상품등록</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">상품명</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="설명을 입력하세요"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">가격</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="설명을 입력하세요"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">설명</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="설명을 입력하세요"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="image">이미지</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        placeholder="설명을 입력하세요"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">등록</button>
            </form>
        </div>
    )
}
export default AddProduct;