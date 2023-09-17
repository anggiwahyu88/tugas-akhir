import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

const register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
        fullname: '',
        absence: '',
        password_confirmation: ''
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    useEffect(() => {
        console.log(errors);
    }, [errors])

    const [isFocusAbsen, setIsFocusAbsen] = useState(false);
    const [isFocusFullName, setIsFocusFullName] = useState(false);
    const [isFocusUsername, setIsFocusUsername] = useState(false);
    const [isFocusPassword, setIsFocusPassword] = useState(false);
    const [isFocusPasswordConfirm, setIsFocusPasswordConfirm] = useState(false);
    return (
        <div className="w-full min-h-screen bg-center bg-cover bg-[url('http://localhost:8000/storage/maxresdefault.jpg')] flex">
            <div
                className="m-auto w-[400px] p-[40px] bg-[rgba(0,0,0,.5)] box-border shadow rounded-[10px]"
                style={{
                    boxShadow: "0 15px 25px rgba(0,0,0,.6)",
                }}
            >
                <h1 className="p-0 text-white text-center mb-[30px] text-3xl font-bold">
                    Register
                </h1>
                <form onSubmit={submit}>
                    <div className="relative mb-[30px]">
                        <input
                            onFocus={() => setIsFocusAbsen(!isFocusAbsen)}
                            onBlur={() => setIsFocusAbsen(!isFocusAbsen)}
                            type="number"
                            name="fullname"
                            
                            className="w-full py-[10px] pl-0 text-lg text-white border-none border-b-4 outline-none bg-transparent focus:ring-0 focus:ring-offset-0"
                            style={{ borderBottom: "1px solid #fff" }}
                            onChange={(e) =>
                                setData("absence", e.target.value)
                            }
                        />
                        <label
                            className={`absolute left-0  py-[10px] transition-all duration-500 pointer-events-none ${isFocusAbsen || data.absence
                                ? "top-[-17px] text-orange-600 text-base"
                                : "top-0 text-white text-lg"
                                }`}
                        >
                            No Absen (1-36)
                        </label>
                        {errors.absence ? <p className={'text-xl text-red-700 font-bold mt-[10px]'}>
                            {errors.absence}
                        </p> : ""}
                    </div>
                    <div className="relative mb-[30px]">
                        <input
                            onFocus={() => setIsFocusFullName(!isFocusFullName)}
                            onBlur={() => setIsFocusFullName(!isFocusFullName)}
                            type="text"
                            name="fullname"
                            required
                            className="w-full py-[10px] pl-0 text-lg text-white border-none border-b-4 outline-none bg-transparent focus:ring-0 focus:ring-offset-0"
                            style={{ borderBottom: "1px solid #fff" }}
                            onChange={(e) =>
                                setData("fullname", e.target.value)
                            }
                        />
                        <label
                            className={`absolute left-0  py-[10px] transition-all duration-500 pointer-events-none ${isFocusFullName || data.fullname
                                ? "top-[-17px] text-orange-600 text-base"
                                : "top-0 text-white text-lg"
                                }`}
                        >
                            Nama Lengkap
                        </label>
                        {errors.fullname ? <p className={'text-xl text-red-600 font-bold mt-[10px]'}>
                            {errors.fullname}
                        </p> : ""}
                    </div>
                    <div className="relative mb-[30px]">
                        <input
                            onFocus={() => setIsFocusUsername(!isFocusUsername)}
                            onBlur={() => setIsFocusUsername(!isFocusUsername)}
                            type="text"
                            name="username"
                            required
                            className="w-full py-[10px] pl-0 text-lg text-white border-none border-b-4 outline-none bg-transparent focus:ring-0 focus:ring-offset-0"
                            style={{ borderBottom: "1px solid #fff" }}
                            onChange={(e) =>
                                setData("username", e.target.value)
                            }
                        />
                        <label
                            className={`absolute left-0  py-[10px] transition-all duration-500 pointer-events-none ${isFocusUsername || data.username
                                ? "top-[-17px] text-orange-600 text-base"
                                : "top-0 text-white text-lg"
                                }`}
                        >
                            Username
                        </label>
                        {errors.username ? <p className={'text-xl text-red-600 font-bold mt-[10px]'}>
                            {errors.username}
                        </p> : ""}
                    </div>

                    <div className="relative mb-[30px]">
                        <input
                            onFocus={() => setIsFocusPassword(!isFocusPassword)}
                            onBlur={() => setIsFocusPassword(!isFocusPassword)}
                            type="password"
                            name="password"
                            required
                            className="w-full py-[10px] p-0 text-lg text-white border-none border-b-4 outline-none bg-transparent focus:ring-0 focus:ring-offset-0 "
                            style={{ borderBottom: "1px solid #fff" }}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <label
                            className={`absolute left-0  py-[10px] transition-all duration-500 pointer-events-none ${isFocusPassword || data.password
                                ? "top-[-17px] text-orange-600 text-base"
                                : "top-0 text-white text-lg"
                                }`}
                        >
                            Password
                        </label>
                        {errors.password ? <p className={'text-xl text-red-600 font-bold mt-[10px]'}>
                            {errors.password}
                        </p> : ""}
                    </div>
                    <div className="relative mb-[30px]">
                        <input
                            onFocus={() => setIsFocusPasswordConfirm(!isFocusPasswordConfirm)}
                            onBlur={() => setIsFocusPasswordConfirm(!isFocusPasswordConfirm)}
                            type="password"
                            name="password"
                            required
                            className="w-full py-[10px] p-0 text-lg text-white border-none border-b-4 outline-none bg-transparent focus:ring-0 focus:ring-offset-0 "
                            style={{ borderBottom: "1px solid #fff" }}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                        <label
                            className={`absolute left-0  py-[10px] transition-all duration-500 pointer-events-none ${isFocusPasswordConfirm || data.password_confirmation
                                ? "top-[-17px] text-orange-600 text-base"
                                : "top-0 text-white text-lg"
                                }`}
                        >
                            Ulangi Password
                        </label>
                        {errors.password_confirmation ? <p className={'text-xl text-red-600 font-bold mt-[10px]'}>
                            {errors.password_confirmation}
                        </p> : ""}
                    </div>
                    <div className="flex">
                        <button
                            disabled={processing}
                            type="submit"
                            className="relative overflow-hidden ml-auto inline-block py-[10px] px-[20px] text-[#b79726] text-lg mt-[20px] tracking-[4px] duration-500 hover:bg-[#f49803] hover:text-white hover:rounded hover:button-shadow"
                        >
                            <span className="animate-rotating-line"></span>
                            <span className="animate-rotating-line"></span>
                            <span className="animate-rotating-line"></span>
                            <span className="animate-rotating-line"></span>
                            Sign In
                        </button>
                    </div>
                    <p className="text-white text-center mt-4">
                        Sudah terdaftar?{" "}
                        <Link
                            href={route("login")}
                            className="text-[#b79726]"
                        >
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default register;
