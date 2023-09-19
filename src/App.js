import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar></Avatar>
      <div className="data">
        <Intro></Intro>
        <SkillList></SkillList>
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <div>
      <img src="#" alt="Photos will be update Soon"></img>
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>Navjot Singh</h1>
      <p>
        I am training to be Web Developer. I used to be backend developer and
        made some desktop applications and now shifted to the front-end
        programming. I love to play games and coding now
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skills name="React" color="red" />
      <Skills name="c#" color="darkgreen" />
      <Skills name="HTML" color="Yellow" />
      <Skills name="CSS" color="lightblue" />
    </div>
  );
}

function Skills(prop) {
  return (
    <div className="skill" style={{ backgroundColor: prop.color }}>
      <span>{prop.name}</span>
    </div>
  );
}
export default App;
