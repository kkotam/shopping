import { useState } from "react";
import users from "../data/users.json"
import { useNavigate, Link } from "react-router-dom";

// 폼 데이터 객체
interface SignInForm{
    username: string,
    password: string,
}

// 로그인 Props 객체 정의
interface SignInProps{
    onLogin: (username: string) => void;
}


const SignIn = ({onLogin}: SignInProps) => {
    // 폼 데이터 상태 관리
    const [formData, setFormData] = useState<SignInForm>({
        username: '',
        password: ''
    })

    //로그인 결과 상태 관리
    const [loginResult, setLoginResult] = useState<string>('');
    const navigate = useNavigate();

    // 입력값 변경 핸들러 함수
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    //폼 제출 핸들러 함수
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {username, password} = formData;

        //유효성 검사
        if(!username || !password){
            alert('모든 항목을 입력하세요.');
            return;
        }

        console.log("formData:", formData);

        //로그인 일치 여부
        const matched = users.find(user =>
            user.username === username && user.password == password);

        if(matched){
            setLoginResult("success");
            onLogin(username);  //부모 컴포넌트에 알림
            alert("로그인 되었습니다.");
            navigate('/');  //로그인 성공후 메인 페이지로 이동
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
                    <label htmlFor="password">비밀번호</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="비밀번호를 입력하세요"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">로그인</button>
            </form>
            <p className="signup-link">
                아직 계정이 없으신가요? <Link to="/signup"> 회원가입</Link>
            </p>
            {loginResult === "fail" && 
                    <p className="error">로그인 실패! 다시 시도해 주세요</p>}
        </div>
    )
}

export default SignIn;