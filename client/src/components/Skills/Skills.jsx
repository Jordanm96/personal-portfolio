import PageHeader from "../PageHeader/PageHeader";
import classes from "./Skills.module.css";

const Skills = () => {
  // Add a diff color to the list item titles color: '',
  const listItemTitle = {fontWeight: 900, marginBottom: '4px', color: '#24c6dc'}
  const backendSkills = (
    <ul>
      <li style={listItemTitle}>BACKEND</li>
      <li>Express - MongoDB</li>
      <li>SQL - PostgreSQL</li>
      <li>Node - Ruby</li>
      <li>Ruby on Rails</li>
    </ul>
  );
  const frontendSkills = (
    <ul>
      <li style={listItemTitle}>FRONTEND</li>
      <li>ReactJS - HTML - CSS</li>
      <li>Javascript - jQuery</li>
      <li>NextJS - Tailwind CSS</li>
      <li>Styled Components</li>
    </ul>
  );
  const otherSkills = (
    <ul>
      <li style={listItemTitle}>KNOWLEDGE</li>
      <li>Git - NPM - OOP</li>
      <li>Heroku - Airtable</li>
      <li>Rest APIs - Storybook</li>
      <li>Typescript - Theme UI</li>
    </ul>
  );
  const totalSkills = [backendSkills, frontendSkills, otherSkills];
  return (
    <div className = {classes.Skills} id='skills'>
      <PageHeader title={"Skills"} />
      {/* <p>
        Below are some programming languages, frameworks, toolkits, and
        libraries that I have worked with and enjoy:
      </p> */}
      <div className={classes.Container}>
        {/* <img src={skillsImg} alt='skills img'/> */}
        {totalSkills.map((skills) => {
          return <div className={classes.List}>{skills}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
