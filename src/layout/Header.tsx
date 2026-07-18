import { NavLink, useNavigate } from "react-router-dom";

interface HeaderProps{
    isLogedIn : boolean,
    onLogout : () => void;
}

const Header = () => {

    return(
        <header className="header">
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>상품목록</NavLink>
                <NavLink to='/products/add'>상품등록</NavLink>
                {/* <NavLink to='/products/signin'>로그인</NavLink> */}
                {isLogedIn ? (
                    <div>
                        <button onClick=()=>{
                            onLogout();
                            navigate('/')
                        }>

                        </button>
                    </div>
                ) : (

                )}
            </nav>
        </header>
    )
}
export default Header;