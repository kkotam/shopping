import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json"

interface FormData{
    username: string,
    password: string
}

const SignIn =() =>{
    const [formData, setFormData] = useState<FormData>({
            username: "",
            password: ""
        });

    const navigate = useNavigate();
    const [loginResult, setLoginResult] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});

    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {username, password} = formData;

        if(!username || !password){
            alert("모든 항목을 입력하세요")
        }    
        
        console.log("formData: ", formData);

        const matched = users.find(user =>user.username === username && user.password == password);

        if(matched){
            setLoginResult("success");
            alert("로그인 되었습니다")
            navigate('/');
        }else{
            setLoginResult("fail");
            return;
        }
    }


    return(
        <div className="signin">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">아이디</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="아이디를 입력하세요"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">패스워드</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="아이디를 입력하세요"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">로그인</button>
                {loginResult === "fail" &&
                <p className="error">로그인 실패! 다시 시도해주세요</p>}

            </form>
        </div>
    )
}
export default SignIn;