import type { Route } from "./+types/home";
import GamePage from "../pages/game";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GameCriticX - Game" },
    {
      name: "description",
      content:
        "Bem-vindo ao GameCriticX sua plataforma de avaliação de games e Gameplays!",
    },
  ];
}

export default function Game() {
  return <GamePage />;
}
