import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("", "./routes/home/layout.tsx", [
    route(":channelId", "./routes/home/content.tsx"),
  ]),
] satisfies RouteConfig;
