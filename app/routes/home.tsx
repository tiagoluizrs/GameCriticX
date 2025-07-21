import type { Route } from "./+types/home";
import HomePage from "../pages/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GameCriticX - Home" },
    {
      name: "description",
      content:
        "Bem-vindo ao GameCriticX sua plataforma de avaliação de games e Gameplays!",
    },
  ];
}

export default function Home() {
  return <HomePage />;
}
