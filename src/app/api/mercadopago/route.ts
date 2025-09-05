// SDK de Mercado Pago
import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });

export async function POST(req: Request) {

    try {
        const body = await req.json();

        const preference = new Preference(client);

        const result = await preference.create({
            body: {
              items: [
                {
                  id: body.id,
                  title: body.title,
                  quantity: body.quantity,
                  unit_price: body.price,
                  currency_id: "ARS",
                },
              ],
              back_urls: {
                success: "http://localhost:3000/checkout/success",
                failure: "http://localhost:3000/checkout/failure",
                pending: "http://localhost:3000/checkout/pending",
              },
            },
          });
          

        return NextResponse.json({ id: result.id });
    } catch (error: any) {
        console.error("Error creando preferencia:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}