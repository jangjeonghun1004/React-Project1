import PageTemplate from "./PageTemplate";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { signIn, clearError } from "../store/slices/authSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function SignInPage() {
    const [signInSuccessMessage, setSignInSuccessMessage] = useState<string>(''); // 로그인 성공 시 메시지
    const dispatch = useDispatch<AppDispatch>();
    const { error } = useSelector((state: RootState) => state.auth);

    // 컴포넌트 마운트 시 에러 상태를 초기화
    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);

    const handleSignIn = async (formData: FormData) => {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            // dispatch 시 .unwrap()을 사용하면, 성공 시에는 객체(SignInResponse)를 반환하고
            // 실패 시에는 rejectWithValue로 전달한 에러 메시지가 throw됩니다.
            const {token} = await dispatch(signIn({ email, password })).unwrap();
            if (token) {
                localStorage.setItem('jwtToken', token);
            }
            setSignInSuccessMessage(`로그인 성공 및 JWT 토큰이 설정되었습니다.`);
        } catch (rejectWithValueMessage) { // dispatch(signIn())에서 rejectWithValue로 전달한 에러 메시지
            console.error('로그인 실패:', rejectWithValueMessage);
        }
    };

    return (
        <PageTemplate title="Authentication" subTitle="" imageSrc="">
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-6 col-12-medium" style={{ maxWidth: 500, width: '100%', padding: 20 }}>
                    <h2 style={{ textAlign: "center" }}>Sign In</h2>

                    <div>
                        {signInSuccessMessage && <p style={{ color: 'green', textAlign: 'center' }}>{signInSuccessMessage}</p>}
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
                                <li><input type="submit" value="Sign In" className="primary fit" /></li>
                            </ul>
                        </div>
                    </form>

                    <div style={{ textAlign: 'center' }}>
                        Don't have an account? <Link to={`${import.meta.env.BASE_URL}signUp`} replace>Sign Up</Link>
                    </div>
                    <br />
                </div>
            </div>
        </PageTemplate>
    );
}