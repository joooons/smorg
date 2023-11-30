

function Message() {

    const name = 'Nombre';
    if (name)
        return <h1>Sup {name}</h1>
    return <h1>Hello there</h1>;
}

export default Message;