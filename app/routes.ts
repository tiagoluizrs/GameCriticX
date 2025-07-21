import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  route("register", "routes/register.tsx"),
  route("forgot-password", "routes/forgot-password.tsx"),
  route("profile", "routes/profile.tsx"),
  route("game/:id", "routes/game.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
