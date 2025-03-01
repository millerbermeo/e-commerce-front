import React, { useState } from "react";
import Input from "../../../shared/components/Input";

const UserRegisterForm: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        identificacion: "",
        telefono: "",
        direccion: "",
    });

    const [errors, setErrors] = useState({
        nombre: "",
        apellido: "",
        identificacion: "",
        telefono: "",
        direccion: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" }); // Limpiar errores al escribir
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let newErrors = { ...errors };
        let hasError = false;

        // Validar cada campo
        Object.keys(formData).forEach((key) => {
            if (!formData[key as keyof typeof formData]) {
                newErrors[key as keyof typeof errors] = "Este campo es obligatorio";
                hasError = true;
            }
        });

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        alert(`Datos ingresados: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <form onSubmit={handleSubmit} className="w-[500px] mx-auto space-y-4 bg-gray-50 p-10 rounded-3xl relative border-l border-b border-t border-gray-200">
            <div className="absolute bg-[#66D2CE] w-full h-full -z-10 rounded-4xl">

            </div>

            <Input
                label="Nombre"
                name="nombre"
                type="text"
                placeholder="Ingresa tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                error={errors.nombre}
            />

            <Input
                label="Apellido"
                name="apellido"
                type="text"
                placeholder="Ingresa tu apellido"
                value={formData.apellido}
                onChange={handleChange}
                error={errors.apellido}
            />

            <Input
                label="Identificación"
                name="identificacion"
                type="text"
                placeholder="Ingresa tu identificación"
                value={formData.identificacion}
                onChange={handleChange}
                error={errors.identificacion}
            />

            <Input
                label="Teléfono"
                name="telefono"
                type="tel"
                placeholder="Ingresa tu teléfono"
                value={formData.telefono}
                onChange={handleChange}
                error={errors.telefono}
            />

            <Input
                label="Dirección"
                name="direccion"
                type="text"
                placeholder="Ingresa tu dirección"
                value={formData.direccion}
                onChange={handleChange}
                error={errors.direccion}
            />

            <button
                type="submit"
                className="w-full bg-[#2DAA9E] text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
                Enviar
            </button>

        </form>
    );
};

export default UserRegisterForm;
