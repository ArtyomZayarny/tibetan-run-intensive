import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, country } = await request.json();

    if (!firstName?.trim() || !lastName?.trim() || !country?.trim()) {
      return NextResponse.json(
        { error: "Все поля обязательны" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Интенсив ЛАД" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `Новая регистрация: ${firstName} ${lastName}`,
      html: `
        <h2>Новая регистрация на интенсив</h2>
        <table style="border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:bold;">Имя:</td><td style="padding:8px;">${firstName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Фамилия:</td><td style="padding:8px;">${lastName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Страна:</td><td style="padding:8px;">${country}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Дата:</td><td style="padding:8px;">${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Ошибка отправки. Попробуйте позже." },
      { status: 500 }
    );
  }
}
