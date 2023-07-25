npimport logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="Header"></div>
      <div className="formStyle">
        <form action="#" />
        <label>Name</label><br />
        <input type="text" name="Name" placeholder="Project Name" required /><br />
        <label>Symbol</label><br />
        <input type="text" name="Symbol" placeholder="Symbol" required /><br />
        <label>Description</label><br />
        <input type="text" name="Des" placeholder="Description" required /><br />
        <label>Price</label><br />
        <input type="number" name="Price" placeholder="e.g 0.1, 0.01, 0.001" required /><br />
        <label>Wallet Address</label><br />
        <input type="url" name="WAddress" placeholder="Put your wallet address" required /><br />
        <label>Preset Royalty</label><br />
        <input type="number" name="PreRoyalty" placeholder="e.g 10%" required /><br />
        <label>Blockchain</label><br />
        <input type="text" name="Blockchain" placeholder="Select network" required /><br />
        <label>Max.Mint per wallet</label><br />
        <input type="number" name="MintWallet" placeholder="e.g 20%" required /><br />
        <br />
        <button type="submit" d="Nextbtn">Next</button>
        <form />
      </div>
      <div className="footer"></div>
    </div>
  );
}
export default App;
