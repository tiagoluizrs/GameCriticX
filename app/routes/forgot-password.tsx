import type { Route } from "./+types/home";
import ForgotPasswordPage from "../pages/forgot-password";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GameCriticX - Esqueci minha senha" },
    {
      name: "description",
      content:
        "Bem-vindo ao GameCriticX sua plataforma de avaliação de games e Gameplays!",
    },
  ];
}

export default function ForgotPassword() {
  return <ForgotPasswordPage />;
}
