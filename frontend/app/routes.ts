import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home/layout.tsx"),
  route(":channelId", "./routes/home/content.tsx"),
] satisfies RouteConfig;
