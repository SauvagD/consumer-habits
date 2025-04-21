import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layout.tsx", [
    route("music", "./routes/music/layout.tsx", [
      index("./routes/music/index.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
