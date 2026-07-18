import { NavLink, useNavigate } from "react-router-dom";

// Props 객체 정의
interface HeaderProps{
    isLoggedIn: boolean,
    userId: string | null,
    onLogout: () => void
}

const Header = ({isLoggedIn, userId, onLogout}: HeaderProps) => {
    const navigate = useNavigate();

    return(
        <header className="header">
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>상품목록</NavLink>
                <NavLink to='/products/add'>상품등록</NavLink>
                {isLoggedIn ? (
                    <div className="header-user">
                        <span>{userId}</span>
                        <button
                            onClick={() => {
                                onLogout();
                                navigate('/');
                            }}
                            className="logout-btn"
                        >
                            로그아웃
                        </button>
                    </div>
                ) : (
                    <NavLink to='/signin'>로그인</NavLink>
                )}
            </nav>
        </header>
    )
}

export default Header;