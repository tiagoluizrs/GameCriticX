import type { Route } from "./+types/home";
import NotFoundPage from "../pages/not-found";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GameCriticX - Página não encontrada" },
    {
      name: "description",
      content:
        "Bem-vindo ao GameCriticX sua plataforma de avaliação de games e Gameplays!",
    },
  ];
}

export default function NotFound() {
  return <NotFoundPage />;
}
