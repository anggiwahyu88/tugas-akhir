<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate(
            [
                'absence' => 'required|integer|between:1,36|unique:' . User::class,
                'fullname' => 'required|string|max:255',
                'username' => 'required|string|max:255|unique:' . User::class,
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ],
            [
                'required'  => ':attribute harus diisi.',
                'absence.between' => 'Pilih no absen 1-36',
                'absence.unique' => 'No absen tersebut telah digunakan',
                'username.unique' => 'Username tersebut telah digunakan',
                'password.confirmed' => 'Password harus sama',
                'password'=>'Password minimal 8 characters'
            ]
        );

        $user = User::create([
            'absence' => $request->absence,
            'fullname' => $request->fullname,
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
