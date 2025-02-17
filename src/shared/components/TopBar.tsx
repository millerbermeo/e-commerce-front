import React from "react";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";


const TopBar: React.FC = () => {
    return (
        <div className="w-full bg-black text-white  py-3 text-base px-20 hidden lg:flex items-center justify-between absolute z-30 top-0">
            {/* Mensaje de promoción o novedades */}
            <p className="flex-1">
                🚀 ¡Última tecnología al mejor precio! Envíos gratis en compras mayores a $100 USD.
            </p>

            {/* Contacto */}
            <div className="flex gap-4">
                <div className="flex items-center gap-1">
                    <PhoneIcon />
                    <span>+1 234 567 890</span>
                </div>
                <div className="flex items-end gap-1 text-yellow-500 underline underline-offset-5">
                    <MailIcon />
                    <span>soporte@techstore.com</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
