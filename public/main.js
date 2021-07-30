const socket = io.connect('http://localhost:3000')

const sender = document.getElementById('sender')
const msg = document.getElementById('msg')
const sendbtn = document.getElementById('sendbtn')
const output = document.getElementById('output')
const feedback = document.getElementById('feedback')

sendbtn.addEventListener('click',() =>{
    socket.emit('main',{
        msg:msg.value,
        sender:sender.value
    })
})

socket.on('main',data =>{
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.sender + ' : </strong>' + data.msg + '</p>'
    message.value = '';
})

msg.addEventListener('keypress',() =>{
    socket.emit('typing',sender.value)
})

socket.on('typing',data =>{
    feedback.innerHTML = '<p>' + data + '...</p>'
})