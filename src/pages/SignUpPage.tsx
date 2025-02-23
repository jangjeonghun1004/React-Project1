import PageTemplate from "./PageTemplate";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { signUp, clearError } from "../store/slices/authSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function SignUpPage() {
    const [signUpSuccessMessage, setSignUpSuccessMessage] = useState<string>(''); // 회원가입 성공 시 메시지
    const dispatch = useDispatch<AppDispatch>();
    const { error } = useSelector((state: RootState) => state.auth);

    // 컴포넌트 마운트 시 에러 상태를 초기화
    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);

    const handleSignUp = async (formData: FormData) => {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            // dispatch 시 .unwrap()을 사용하면, 성공 시에는 객체(SignUpResponse)를 반환하고
            // 실패 시에는 rejectWithValue로 전달한 에러 메시지가 throw됩니다.
            await dispatch(signUp({ email, password })).unwrap();
            setSignUpSuccessMessage(`회원가입 성공`);
        } catch (rejectWithValueMessage) { // dispatch(signUp)에서 rejectWithValue로 전달한 에러 메시지
            console.error('회원가입 실패:', rejectWithValueMessage);
            setSignUpSuccessMessage('');
        }
    };

    return (
        <PageTemplate title="Authentication" subTitle="" imageSrc="">
            <>
                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="col-6 col-12-medium" style={{ maxWidth: 500, width: '100%', padding: 20 }}>
                        <h2 style={{ textAlign: "center" }}>Sign Up</h2>

                        <div>
                            {signUpSuccessMessage && <p style={{ color: 'green', textAlign: 'center' }}>{signUpSuccessMessage}</p>}
                            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                        </div>

                        <form action={handleSignUp}>
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
                                    <li><input type="submit" value="Sign Up" className="primary fit" /></li>
                                </ul>
                            </div>
                        </form>

                        <div style={{ textAlign: 'center' }}>
                            Have an account? <Link to={`${import.meta.env.BASE_URL}signIn`} replace>Sign In</Link>
                        </div>
                    </div>
                </div>
            </>
        </PageTemplate>
    );
}