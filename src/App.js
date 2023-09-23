import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
      {skills.map((skills) => (
        <Skills skillL={skills} key={skills.name}></Skills>
      ))}
    </div>
  );
}

function Skills({ skillL }) {
  return (
    <div className="skill">
      <span style={{ backgroundColor: `${skillL.color}`, fontWeight: "bold" }}>
        {skillL.skill}
      </span>
    </div>
  );
}
export default App;
