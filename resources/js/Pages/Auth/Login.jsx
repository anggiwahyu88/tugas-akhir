import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";

const Login2 = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    const [isFocusUsername, setIsFocusUsername] = useState(false)
    const [isFocusPassword, setIsFocusPassword] = useState(false)
    return (
        <div className="w-full h-screen bg-center bg-cover bg-[url('http://localhost:8000/storage/maxresdefault.jpg')]">
            <div className="absolute top-[50%] left-[50%] w-[400px] p-[40px] bg-[rgba(0,0,0,.5)] box-border shadow rounded-[10px]" style={{ boxShadow: "0 15px 25px rgba(0,0,0,.6)", transform: "translate(-50%, -50%)" }}>
                <h1 className="p-0 text-white text-center mb-[30px] text-3xl font-bold">Login</h1>
                <form onSubmit={submit}>
                    <div className="relative">
                        <input
                            onFocus={() => setIsFocusUsername(!isFocusUsername)}
                            onBlur={() => setIsFocusUsername(!isFocusUsername)}
                            type="text"
                            name="username"
                            required
                            className="w-full py-[10px] pl-0 text-lg text-white mb-[30px] border-none border-b-4 outline-none bg-transparent focus:ring-0 focus:ring-offset-0"
                            style={{ borderBottom: "1px solid #fff" }}
                            onChange={(e) => setData('username', e.target.value)}
                        />
                        <label className={`absolute left-0  py-[10px] transition-all duration-500 pointer-events-none ${isFocusUsername || data.username ? "top-[-17px] text-orange-600 text-base" : "top-0 text-white text-lg"}`}>Username</label>
                    </div>
                
                    <div className="relative">
                        <input
                            onFocus={() => setIsFocusPassword(!isFocusPassword)}
                            onBlur={() => setIsFocusPassword(!isFocusPassword)}
                            type="password"
                            name="password"
                            required
                            className="w-full py-[10px] p-0 text-lg text-white mb-[30px] border-none border-b-4 outline-none bg-transparent focus:ring-0 focus:ring-offset-0 "
                            style={{ borderBottom: "1px solid #fff" }}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <label className={`absolute left-0  py-[10px] transition-all duration-500 pointer-events-none ${isFocusPassword || data.password ? "top-[-17px] text-orange-600 text-base" : "top-0 text-white text-lg"}`}>Password</label>
                    </div>
                    <div className="flex">
                        <button type="submit" className="relative overflow-hidden ml-auto inline-block py-[10px] px-[20px] text-[#b79726] text-lg mt-[20px] tracking-[4px] duration-500 hover:bg-[#f49803] hover:text-white hover:rounded hover:button-shadow" disabled={processing}>
                            <span className="animate-rotating-line"></span>
                            <span className="animate-rotating-line"></span>
                            <span className="animate-rotating-line"></span>
                            <span className="animate-rotating-line"></span>
                            Sign In
                        </button>
                    </div>
                    <p className="text-white text-center mt-4">Tidak punya akun? <Link href={route('register')} className="text-[#b79726]">Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login2;