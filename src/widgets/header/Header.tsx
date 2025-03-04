import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { STORAGE_KEYS } from "../../app/storageKeys";
import { useCallback } from "react";

type Props = {
    title?: string;
};

function Header({ title = "Next AI" }: Props) {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const token = useSelector((state: RootState) => state.auth.token);

    const handleSignOut = useCallback(async () => {
        try {
            await dispatch(signOut()).unwrap();
            localStorage.removeItem(STORAGE_KEYS.JWT_TOKEN);
            navigate(`${import.meta.env.BASE_URL}`);
        } catch (rejectWithValue) {
            console.error("로그 아웃 실패:", rejectWithValue);
        }
    }, [dispatch, navigate]);

    return (
        <header id="header">
            <Link to={import.meta.env.BASE_URL} className="logo">
                <strong>{title}</strong>
            </Link>
            <ul className="icons">
                {token ? (
                    <li>
                        <Link to={''} onClick={handleSignOut} className="icon solid fa-sign-out-alt">&nbsp;<p style={{ display: "inline" }}>Sign Out</p></Link>
                    </li>
                ) : (
                    <li>
                        <Link to={`${import.meta.env.BASE_URL}signIn`} className="icon solid fa-sign-in-alt">&nbsp;<p style={{ display: "inline" }}>Sign In</p></Link>
                    </li>
                )}
            </ul>
        </header>
    );
}

export default Header;
