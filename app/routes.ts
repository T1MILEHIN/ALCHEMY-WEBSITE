import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("layout/homeLayout.tsx", [
        index("routes/home.tsx"),
        route("about", "routes/about.tsx"),
    ]),
    route("signup", "routes/auth/signup.tsx"),
    route("login", "routes/auth/login.tsx"),

] satisfies RouteConfig;
