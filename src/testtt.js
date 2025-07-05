// socketio.js
import { io } from "socket.io-client";
import { getCachedListResource } from "frappe-ui/src/resources/listResource";
import { getCachedResource } from "frappe-ui/src/resources/resources";

let socket; // Declare a socket variable

export function initSocket() {
  if (!socket && import.meta.env.DEV) {
    let host = window.location.hostname;
    let siteName = "md.localhost";
    let port = window.location.port ? ":9000" : ":9000";
    let protocol = port ? "http" : "https";
    let url = `${protocol}://${host}${port}/${siteName}`;
    console.log(port, protocol, url);
    socket = io(url, {
      withCredentials: true,
      reconnectionAttempts: 5,
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

    socket.on("connect", () => {
      console.log("✅ Socket connected:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.error("❌ Connection error:", err);
    });
  }

  return socket;
}

// Provide a method to access the initialized socket
export function getSocket() {
  if (!socket && import.meta.env.DEV) {
    socket = initSocket();
  } else {
    socket = initSocket();
  }
  return socket;
}
