import PageTemplate from "./PageTemplate";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { signIn, signOut } from "../store/slices/authSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
    const [signInSuccessMessage, setSignInSuccessMessage] = useState<string>(''); // 로그인 성공 시 메시지
    const [signOutSuccessMessage, setSignOutSuccessMessage] = useState<string>(''); // 로그아웃 성공 시 메시지

    const dispatch = useDispatch<AppDispatch>();
    const { error } = useSelector((state: RootState) => state.auth);

    const handleSignIn = async (formData: FormData) => {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            // dispatch 시 .unwrap()을 사용하면, 성공 시에는 객체(SignInResponse)를 반환하고
            // 실패 시에는 rejectWithValue로 전달한 에러 메시지가 throw됩니다.
            const { token } = await dispatch(signIn({ email, password })).unwrap();
            if (token) {
                localStorage.setItem('jwtToken', token);
            }
            setSignInSuccessMessage(`로그인 성공 및 JWT 토큰이 설정되었습니다.`);
        } catch (rejectWithValueMessage) { // dispatch(signIn())에서 rejectWithValue로 전달한 에러 메시지
            console.error('로그인 실패:', rejectWithValueMessage);
        }
    };

    const handleSignOut = async () => {
        try {
            const response = await dispatch(signOut()).unwrap();
            if (response) {
                setSignOutSuccessMessage(`로그아웃 성공 및 JWT 토큰이 제거되었습니다.`);
                localStorage.removeItem('jwtToken');
            }
        } catch (rejectWithValueMessage) { // dispatch(signOut())에서 rejectWithValue로 전달한 에러 메시지
            console.error('로그아웃 실패:', rejectWithValueMessage);
        }
    };

    return (
        <PageTemplate title="Authentication" subTitle="" imageSrc="">
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-6 col-12-medium" style={{ maxWidth: 500, width: '100%', padding: 20 }}>
                    <div>
                        {signInSuccessMessage && <p style={{ color: 'green', textAlign: 'center' }}>{signInSuccessMessage}</p>}
                        {signOutSuccessMessage && <p style={{ color: 'green', textAlign: 'center' }}>{signOutSuccessMessage}</p>}
                        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                    </div>

                    <form action={handleSignIn}>
                        <div className="row gtr-uniform">
                            <div className="col-12">
                                <input type="email" name="email" placeholder="Email" />
                            </div>
                            <div className="col-12">
                                <input type="password" name="password" placeholder="Password" />
                            </div>
                        </div>
                        <br />
                        <div className="col-12">
                            <ul className="actions fit">
                                <li><input type="submit" value="Sign In" className="primary" /></li>
                                <li><input type="reset" value="Reset" /></li>
                            </ul>
                        </div>
                    </form>

                    <div>
                        <h4>JWT Toke 기반 서비스</h4>
                        <Link to={`${import.meta.env.BASE_URL}toDo`} className="button">To Do List →</Link>&nbsp;
                        <button onClick={handleSignOut} >Sign Out →</button>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
}