document.querySelector("#start_chat").addEventListener("click", (event) => {
    const socket = io();

    const chatHelp = document.getElementById("chat_help");
    chatHelp.style.display = "none";

    const chatInSupport = document.getElementById("chat_in_support");
    chatInSupport.style.display = "block";

    const email = document.getElementById("email").value;
    const text = document.getElementById("txt_help").value;

    socket.on("connect", () => {
        const params = {
            email,
            text
        };

        socket.emit("client_first_access", params, (call, err) => {
            if (err) {
                console.err(err);
            }
            else {
                console.log(call);
            }
        });
    });
});


