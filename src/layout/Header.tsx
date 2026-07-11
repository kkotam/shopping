import { NavLink } from "react-router-dom";

const Header = () => {

    return(
        <header className="header">
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>상품목록</NavLink>
                <NavLink to='/products/add'>상품등록</NavLink>
            </nav>
        </header>
    )
}
export default Header;