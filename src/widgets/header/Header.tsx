import { Link } from "react-router-dom";
import { signOut } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { STORAGE_KEYS } from "../../app/storageKeys";

type Props = {
    title?: string
}

function Header({ title = "React + Vite + TypeScript" }: Props) {
    const dispatch = useDispatch<AppDispatch>();
    // Redux store에서 토큰을 읽어와 인증 상태를 결정합니다.
    const token = useSelector((state: RootState) => state.auth.token);
    const handleSignOut = async () => {
        try {
            await dispatch(signOut()).unwrap();
            localStorage.removeItem(STORAGE_KEYS.JWT_TOKEN);
        }catch(rejectWithValueMessage) {
            console.error('로그 아웃 실패:', rejectWithValueMessage);
        }
    }

    return (
        <header id="header">
            <Link to={`${import.meta.env.BASE_URL}`} className="logo"><strong>{title}</strong></Link>
            <ul className="icons">
                <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
                {
                    Boolean(token) ?
                        <li><a href="#" onClick={handleSignOut}><span className="label">Sign Out</span></a></li> :
                        <li><Link to={`${import.meta.env.BASE_URL}signIn`}>Sign In</Link></li>
                }
            </ul>
        </header>
    );
}

export default Header;