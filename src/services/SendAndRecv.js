function sendMessage(socket, mess, channel_id) {
  this.$socket.send(
    JSON.stringify({ SendReq: { channel_id: channel_id, message: mess } })
  );
  this.$options.sockets.onmessage = (res) => {
    let data = JSON.parse(res.data);
    console.log(data.SendRes.message_id);
  };
}

export default { sendMessage };
