import logo from '../assets/logo.png'
const Navbar = ({ web3Handler, account }) => {
    return (
        <nav className="flex-between">
            <a>
                <img src={logo} className="App-logo" alt="logo" />
                Virtual Land
            </a>
            {account ? (
                <a
                    href={`${""}/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button">
                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                </a>
            ) : (
                <button onClick={web3Handler} className="button">Connect Wallet</button>
            )}
        </nav>
    )
}
export default Navbar;