import { useEffect } from "react";

export function SocketIO() {
  useEffect(() => {
    let setup = async () => {
      if (window.didOnce) {
        return;
      }
      window.didOnce = true;
      const { io } = await import("socket.io-client");
      const SERVER_URL = "http://localhost:1337";
      const socket = io(SERVER_URL);

      //  wait until socket connects before adding event listeners
      socket.on("connect", () => {
        console.log("connect", socket);
        socket.on("room:update", (data) => {
          console.log(data);
        });
      });
    };

    setup();
  }, []);
  return (
    <div>
      SocketIO
      {/*  */}
    </div>
  );
}
