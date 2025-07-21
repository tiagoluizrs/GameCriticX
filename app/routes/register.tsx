import type { Route } from "./+types/home";
import RegisterPage from "../pages/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GameCriticX - Registrar" },
    {
      name: "description",
      content:
        "Bem-vindo ao GameCriticX sua plataforma de avaliação de games e Gameplays!",
    },
  ];
}

export default function Register() {
  return <RegisterPage />;
}
