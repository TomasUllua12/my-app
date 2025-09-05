// app/api/webhook/route.ts (Next 13 App Router)
import { NextResponse } from "next/server";
import crypto from "crypto";
import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });

export async function POST(req: Request) {
  const body = await req.json();
  const headers = req.headers;

  // Extraer x-signature para validar
  const xSignature = headers.get("x-signature");
  if (!xSignature) return NextResponse.json({ error: "No signature" }, { status: 400 });

  // Separar ts y v1
  const [tsPart, v1Part] = xSignature.split(",");
  const ts = tsPart.split("=")[1];
  const v1 = v1Part.split("=")[1];

  // Template para validar HMAC
  const requestId = headers.get("x-request-id");
  const dataId = body.data?.id;
  const secret = process.env.MP_WEBHOOK_SECRET!;

  const template = `id:${dataId};request-id:${requestId};ts:${ts};`;

  const hash = crypto.createHmac("sha256", secret).update(template).digest("hex");

  if (hash !== v1) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
  }

  // Validación OK → procesar evento
  if (body.type === "payment") {
    const payment = new Payment(client);
    const paymentData = await payment.get({ id: dataId });
    console.log("Pago recibido:", paymentData);
    // Aquí podés actualizar tu DB según paymentData.status
  }

  // Siempre responder 200 OK
  return NextResponse.json({ received: true });
}
