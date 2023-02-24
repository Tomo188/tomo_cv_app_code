import "./header.scss"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"
import logo2 from "../logo-1.png"
import { auth } from "../firebase/firebase";
import { setFromLocalStorage } from "../store/user/user_slice";
import { useDispatch } from "react-redux";

export const Header = () => {
    const basketState =useSelector(state=>state.products.length)
    const test=useSelector(state=>state)
    console.log(test.products)
    const user = useSelector(state => state.user)
    const dispatch=useDispatch()
    function filteredUsername(email) {
        let userName = "";
        for (let i = 0; i < email.length; i++) {
            if (email[i] === "@") return userName
            console.log(email[i])
            userName += email[i]
        }

        return "test";
    }
    return (
        <>
            {/**/}<div className="header">
                
                <div className="logo">
                    <Link to="/">
                        <img src={logo2} alt="logo of amazon online shop" />

                    </Link>
                </div>
                 
                <div className="search">
                    <form>
                        <input disabled={true} />
                        <SearchIcon className="header-search-icon" />
                    </form>
                </div>
                
                <div className="header-nav">
                
                    <div className="options">
                        <span className="line1">Hello {user ? filteredUsername(user?.email) : "guest"} </span>
                        <span className="line2" onClick={() => {
                            if (user) {
                                const answer = window.confirm("do you want logout from this page?")
                                if (answer) auth.signOut()
                                dispatch(setFromLocalStorage({
                                    user: null,
                                    products: [],
                                    totalPrice: 0                                 
                                }))
                            }
                        }}>
                            <Link to={!user && "/login"}>{user ? "Sign Out" : "Sign in"}</Link> </span>
                    </div>
                    
                    <div className="options">
                        <span className="line1">returns</span>
                        <span className="line2">& Orders</span>
                    </div>
                    
                    <div className="options">
                        <span className="line1">Your </span>
                        <span className="line2"> Prime</span>
                    </div>
                    {/**/}
                    <div className="basket">
                        <Link to="/checkOut"><ShoppingBasketIcon /></Link>
                        <span className="header_basket  basket_count">{basketState}</span>
                    </div>
                       
                </div>
                
            </div>
            <Outlet />
            
            <footer className="footer">

                <p><small>&copy; 2022</small>Tomislav Krtalic</p>

            </footer>
        </>
    )
}


