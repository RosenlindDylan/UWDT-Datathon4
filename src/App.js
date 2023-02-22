import './App.css';

const { tableau } = window;

// xml of the page
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#" id="datathoughts" >Data Thoughts</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <header>

        <h1>Crime Trends in Seattle</h1>
      </header>
      <main>
      {/*this container corresponds to the elementId fetch in the js code*/}
      <div id="vizContainer"></div>
        <p>Seattle has experienced a recent increase in crime, and it's important to understand the trends and patterns in order to stay safe and informed. This visualization shows crime trends in Seattle over time, including the types of crimes being committed and where they are occurring.</p>
      </main>
      <footer>
        <p>Brought to you by DataThoughts</p>
        <p>Check out DubsTech</p>
        <a href="https://www.instagram.com/dubstechuw/?hl=en">on Instagram</a>
      </footer>
    </div>
  );
}


// function for the tableau embedding api
function initViz() {
  var containerDiv = document.getElementById("vizContainer"),
  url = "https://public.tableau.com/views/Book1_16767740253750/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";
  // inserts the vizualization into the vizContainter div
  var viz = new tableau.Viz(containerDiv, url);
}


export default App;