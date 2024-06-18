"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RegisterPage(props) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = (field) => {
    setFormData({ ...formData, [field]: !formData[field] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-500 to-gray-300 px-6 py-12 lg:px-8 overflow-y-hidden">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <img
          className="mx-auto h-16 w-auto mb-6"
          src="asd.jpeg"
          alt="Your Company Logo"
        />

        <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">
          Crear una cuenta
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              className="w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              required
            />
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Apellido"
              className="w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            required
          />

          <div className="relative">
            <input
              type={formData.showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              className="w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 py-1.5 bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={() => handleTogglePassword("showPassword")}
            >
              {formData.showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          <div className="relative">
            <input
              type={formData.showConfirmPassword ? "text" : "password"}
              name="confirmarPassword"
              value={formData.confirmarPassword}
              onChange={handleChange}
              placeholder="Confirmar Contraseña"
              className="w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 py-1.5 bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={() => handleTogglePassword("showConfirmPassword")}
            >
              {formData.showConfirmPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-800  py-2.5 px-4 rounded-md text-white font-semibold shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Boton
          </button>
        </form>
      </div>
    </div>
  );
}
