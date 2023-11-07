import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { Guest } from "@/Components/Guest";
import GuestLayout from "@/Layouts/GuestLayout";

const register = () => {
    const [isFocusAbsen, setIsFocusAbsen] = useState(false);
    const [isFocusFullName, setIsFocusFullName] = useState(false);
    const [isFocusUsername, setIsFocusUsername] = useState(false);
    const [isFocusPassword, setIsFocusPassword] = useState(false);
    const [isFocusPasswordConfirm, setIsFocusPasswordConfirm] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
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

    return (
        <GuestLayout >
            <Head>
                <title>Sign Up</title>
                <link rel="preload" href="/storage/hixbd8bp6d.webp" as="image"/>
            </Head>
            <h1 className="p-0 text-white text-center mb-[30px] text-3xl font-bold">
                Register
            </h1>
            <form onSubmit={submit}>
                <div className="relative mb-[30px]">
                    <Guest.Input
                        onFocus={() => setIsFocusAbsen(!isFocusAbsen)}
                        onBlur={() => setIsFocusAbsen(!isFocusAbsen)}
                        type="number"
                        name="fullname"
                        required
                        onChange={(e) => setData("absence", e.target.value)}
                    />
                    <Guest.Label value={"No Absen (1-36)"} data={{ isFocus: isFocusAbsen, value: data.absence }} />
                    <Guest.Error message={errors.absence} />
                </div>

                <div className="relative mb-[30px]">
                    <Guest.Input
                        onFocus={() => setIsFocusFullName(!isFocusFullName)}
                        onBlur={() => setIsFocusFullName(!isFocusFullName)}
                        type="text"
                        name="fullname"
                        required
                        onChange={(e) => setData("fullname", e.target.value)}
                    />
                    <Guest.Label value={"Nama Lengkap"} data={{ isFocus: isFocusFullName, value: data.fullname }} />
                    <Guest.Error message={errors.fullname} />
                </div>

                <div className="relative mb-[30px]">
                    <Guest.Input
                        onFocus={() => setIsFocusUsername(!isFocusUsername)}
                        onBlur={() => setIsFocusUsername(!isFocusUsername)}
                        type="text"
                        name="username"
                        required
                        onChange={(e) => setData("username", e.target.value)}
                    />
                    <Guest.Label value={"Username"} data={{ isFocus: isFocusUsername, value: data.username }} />
                    <Guest.Error message={errors.username} />
                </div>

                <div className="relative mb-[30px]">
                    <Guest.Input
                        onFocus={() => setIsFocusPassword(!isFocusPassword)}
                        onBlur={() => setIsFocusPassword(!isFocusPassword)}
                        type="password"
                        name="password"
                        required
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <Guest.Label value={"Password"} data={{ isFocus: isFocusPassword, value: data.password }} />
                    <Guest.Error message={errors.password} />
                </div>

                <div className="relative mb-[30px]">
                    <Guest.Input
                        onFocus={() => setIsFocusPasswordConfirm(!isFocusPasswordConfirm)}
                        onBlur={() => setIsFocusPasswordConfirm(!isFocusPasswordConfirm)}
                        type="password"
                        name="password"
                        required
                        onChange={(e) => setData("password_confirmation", e.target.value)}
                    />
                    <Guest.Label value={"Ulangi Password"} data={{ isFocus: isFocusPasswordConfirm, value: data.password_confirmation }} />
                    <Guest.Error message={errors.password_confirmation} />
                </div>

                <Guest.Submit title={"Sign Up"} disabled={processing} />

                <p className="text-white text-center mt-4 text-lg">
                    Sudah terdaftar?{" "}
                    <Link
                        href={route("login")}
                        className="text-[#b79726]"
                    >
                        Sign In
                    </Link>
                </p>
            </form>
        </GuestLayout >
    );
};

export default register;
