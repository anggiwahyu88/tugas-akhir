import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { Guest } from "@/Components/Guest";
import GuestLayout from "@/Layouts/GuestLayout";

const Login = () => {
    const [isFocusUsername, setIsFocusUsername] = useState(false)
    const [isFocusPassword, setIsFocusPassword] = useState(false)

    const { data, setData, post, processing, errors } = useForm({
        username: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Sign in" />
            <h1 className="p-0 text-white text-center mb-[30px] text-3xl font-bold">Login</h1>
            <form onSubmit={submit}>
                <div className="relative mb-[30px]">
                    <Guest.Input
                        onFocus={() => setIsFocusUsername(!isFocusUsername)}
                        onBlur={() => setIsFocusUsername(!isFocusUsername)}
                        type="text"
                        name="username"
                        required
                        onChange={(e) => setData('username', e.target.value)}
                    />
                    <Guest.Label
                        value={"Username"}
                        data={{ isFocus: isFocusUsername, value: data.username }}
                    />
                    <Guest.Error message={errors.username} />
                </div>

                <div className="relative mb-[30px]">
                    <Guest.Input
                        onFocus={() => setIsFocusPassword(!isFocusPassword)}
                        onBlur={() => setIsFocusPassword(!isFocusPassword)}
                        type="password"
                        name="password"
                        required
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <Guest.Label
                        value={"Password"}
                        data={{ isFocus: isFocusPassword, value: data.password }}
                    />
                    <Guest.Error message={errors.username} />
                </div>

                <Guest.Submit title={"Sign in"} disabled={processing} />

                <p className="text-white text-center mt-4 text-lg">Tidak punya akun? <Link href={route('register')} className="text-[#b79726]">Sign Up</Link></p>
            </form>
        </GuestLayout>

    );
}

export default Login;