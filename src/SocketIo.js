import { io } from "socket.io-client";
import { getCachedListResource } from "frappe-ui/src/resources/listResource";
import { getCachedResource } from "frappe-ui/src/resources/resources";

export function initSocket() {
  let host = window.location.hostname;
  let siteName = window.site_name;
  let port = window.location.port ? `:${9000}` : "";
  let protocol = port ? "http" : "https";
  let url = `${protocol}://${host}${port}/${siteName}`;

  let socket = io(url, {
    withCredentials: true,
    reconnectionAttempts: 5,
  });
  socket.on("connect", () => {
    console.log("✅ Socket connected:", socket.id);
  });
  socket.on("refetch_resource", (data) => {
    if (data.cache_key) {
      let resource =
        getCachedResource(data.cache_key) ||
        getCachedListResource(data.cache_key);
      if (resource) {
        resource.reload();
      }
    }
  });
  return socket;
}
