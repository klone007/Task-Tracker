import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div>
        <h4>Version 1.0.0</h4>
        <p> 

            Task Tracker helps you organize and prioritize your day 2 day 
            tasks. <br />

            This is a small full stack app. For backend it uses 
            Json server and frontend uses React.
        </p><br/>
        <Link to="/">Go back</Link>
    </div>
  )
}

export default About