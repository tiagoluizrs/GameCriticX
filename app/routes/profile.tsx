import type { Route } from "./+types/home";
import ProfilePage from "../pages/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GameCriticX - Perfil" },
    {
      name: "description",
      content:
        "Bem-vindo ao GameCriticX sua plataforma de avaliação de games e Gameplays!",
    },
  ];
}

export default function Profile() {
  return <ProfilePage />;
}
