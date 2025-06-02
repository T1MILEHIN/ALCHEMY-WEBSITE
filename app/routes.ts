import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

export default [
    layout("layout/homeLayout.tsx", [
        index("routes/home.tsx"),
        route("about", "routes/about.tsx"),
    ]),
    ...prefix("auth", [
        route("signup", "routes/auth/signup.tsx"),
        route("login", "routes/auth/login.tsx"),
        route("forgot-password", "routes/auth/forgotPassword.tsx"),
    ]),


] satisfies RouteConfig;
