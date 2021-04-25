import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3000, () => console.log("Server started on 3000"));
