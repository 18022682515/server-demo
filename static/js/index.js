console.log('启动websocket');
if(WebSocket){
    let ws = new WebSocket('ws://localhost', 'echo-protocol');
    ws.onopen = function(){ ws.send("客户端发送的消息"); }
    ws.onmessage = function (res){
        console.log(res.data);
    }
    ws.onclose = function(){}
    // ws.close();
}
