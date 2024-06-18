"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LoginPage(props) {
  const [status, setStatus] = useState("");
  const url = "http://localhost:3000/api/inventor/ingreso";

  const datosDeIngreso = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const caracteresEspeciales = "!@#$%^&*()_+[]{}|;':,.<>?/".split("");

    const tieneMayuscula = (string) => {
      return /\p{Lu}/u.test(string);
    };

    const tieneMinuscula = (string) => {
      return /\p{Ll}/u.test(string);
    };

    if (email === "" || password === "") {
      console.log("Faltan datos");
      return;
    } else if (
      password.length < 6 ||
      !caracteresEspeciales.some((caracter) => password.includes(caracter)) ||
      !tieneMayuscula(password) ||
      !tieneMinuscula(password)
    ) {
      console.log("Password incorrecto");
      return;
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Cookie: "your-cookie-value", // Replace 'your-cookie-value' with the actual cookie value
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          setStatus("Ingreso exitoso");
        } else {
          setStatus("Error en el ingreso");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    // Aquí puedes manejar la respuesta de la API
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-b  from-gray-400 to-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src="asd.jpeg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Iniciar Sesión
        </h2>
      </div>

      <h1>{status}</h1>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={datosDeIngreso}>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder=" Ingresá tu email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder=" Contraseña"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                href={"/olvidoSuPw"}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Ingresar
            </button>
          </div>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          No sos cliente?
          <Link
            href="/Register"
            className="px-1 font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}
