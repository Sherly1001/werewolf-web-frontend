function receiveMessage(users, messageData, data) {
  let userSend = users.filter((val) => val.id == data.user_id);
  messageData.username = userSend[0].username;
  messageData.avatar_url = userSend[0].avatar_url;
  messageData.message = data.message;
  messageData.channel_id = data.channel_id;
  messageData.message_id = data.message_id;
  return messageData;
}

function getAllMessages(users, messageData, data) {
  let store = [];
  for (let i = 0; i < data.length; ++i) {
    let userSend = users.filter((val) => val.id == data[i].user_id);
    messageData.username = userSend[0].username;
    messageData.avatar_url = userSend[0].avatar_url;
    messageData.message = data[i].message;
    messageData.message_id = data[i].message_id;
    store.unshift({...messageData});
  }
  return store;
}

export default { receiveMessage, getAllMessages };
