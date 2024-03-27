
import './App.css';

function App() {
  return (
      <div className="landing">
        <div className="header">
            <p className= "white p">Landing</p>
            <div id="scnd" className="white">
            <p className= "white">Home</p>
            <p className= "white">Features</p>
            <p className= "white">Reviews</p>
            <p className= "white">Pricing</p>
            <p className= "white">FAQ</p>
            <button id="btn-header">Get started</button>
            </div>
        </div>
      <section className='form'>
        <p id="p">Sign Up for Free</p>

        <form action="/action_page.php">
        <label for="name" className="lable">Name:</label>
        <input type="text" id="name" name="name"></input><br></br>
        <label for="email" className="lable">Email</label>
        <input type="text" id="email" name="email"></input><br></br>
        <label for="email" className="lable">Email</label>
        <input type="text" id="email" name="email"></input><br></br>
        <button className="submit-btn" type="submit" value="Submit">Register</button>
        </form>
      </section>
      <section className="left-div white">
        <p id="header">Fly makes you faster</p>
        <p>is simply dummy text of the printing and the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        <button className="btn-left white">See pricing</button>
      </section>
    </div>
  );
}

export default App;
