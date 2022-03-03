Moralis.initialize("3HJF7tIRKChkgncdQhsM3WVM");

Moralis.serverURL = 'https://qh9p5qbhqeh6.usemoralis.com:2083/server'

init = async () => {
    Window.web3 = await Moralis.Web3.enable();
    initUser();
}
initUser = async () => {
    if (await Moralis.User.current()) {
        hiding(header);
        showing(headerAdmin);
    } else {
        showing(header);
        hiding(headerAdmin);
    }
}
login = async () => {
    try {
        await Moralis.Web3.authenticate();
        initUser();
    }
    catch (err) {
        alert("you don't have metamsk in your browser, please download it from https://metamask.io/")
    }
}

hiding = (element) => element.style.display = 'block';
showing = (element) => element.style.display = 'none';

const header = document.getElementById('header');
const headerAdmin = document.getElementById('header_admin');



const connectBtn = document.getElementById('connectbtn');
connectBtn.onclick = login;
init()