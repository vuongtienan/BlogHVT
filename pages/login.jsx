import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { userRequest } from "../requestMethods";

const Login = () => {
  const router = useRouter();
  const userRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await userRequest.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(loginSuccess(res.data));
      router.push("/");
    } catch (err) {
      dispatch(loginFailure());
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  };

  return (
    <>
      <Head>
        <title>Đăng nhập</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="login">
        <h2 className="login__title font-bold">Đăng nhập</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="">Tên người dùng</label>
          <input
            className="login__input dark:text-gray-900 !p-2"
            type="text"
            placeholder="Tên người dùng"
            ref={userRef}
          />
          <label htmlFor="">Mật khẩu</label>
          <input
            className="login__input dark:text-gray-900 !p-2"
            type="password"
            placeholder="Mật khẩu"
            ref={passwordRef}
          />
          <button className="login__button !p-2" type="submit" disabled={loading}>
            Đăng nhập
          </button>
        </form>
        <div className="login__link">
          Chưa có tài khoản? <Link href="/register">Đăng ký</Link>
        </div>
        {error && (
          <span className="login__error">
            Tên người dùng hoặc mật khẩu chưa đúng!
          </span>
        )}
      </div>
    </>
  );
};

export default Login;
