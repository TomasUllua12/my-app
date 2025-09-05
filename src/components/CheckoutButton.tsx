"use client";

import { useEffect, useState } from "react";

export default function CheckoutButton() {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  useEffect(() => {
    // Llamamos al backend para crear la preferencia
    const createPreference = async () => {
      const res = await fetch("/api/mercadopago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: "product-001",
          title: "Mi producto",
          quantity: 1,
          price: 2000,
        }),
      });
      const data = await res.json();
      setPreferenceId(data.id);
    };
    createPreference();
  }, []);

  useEffect(() => {
    if (!preferenceId) return;

    // Función para renderizar el botón
    const renderButton = () => {
      const container = document.getElementById("checkout-btn");
      if (!container) return;

      // Limpiar contenedor antes de renderizar
      container.innerHTML = "";

      // @ts-ignore
      const mp = new (window as any).MercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY, {
        locale: "es-AR",
      });

      mp.checkout({
        preference: { id: preferenceId },
        render: { container: "#checkout-btn", label: "Pagar con Mercado Pago" },
      });
    };

    // Insertar script si no existe
    if (!(window as any).MercadoPago) {
      const script = document.createElement("script");
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.async = true;
      script.onload = () => renderButton();
      document.body.appendChild(script);
    } else {
      renderButton();
    }
  }, [preferenceId]);

  return <div id="checkout-btn"></div>;
}
