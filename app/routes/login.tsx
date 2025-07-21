import type { Route } from "./+types/home";
import LoginPage from "../pages/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GameCriticX - Entrar" },
    {
      name: "description",
      content:
        "Bem-vindo ao GameCriticX sua plataforma de avaliação de games e Gameplays!",
    },
  ];
}

export default function Login() {
  return <LoginPage />;
}
