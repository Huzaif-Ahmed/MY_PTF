import Profile from "./Profile";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";

interface PageRouterProps {
    index: number;
}

const PageRouter = ({index}:PageRouterProps) =>{
  switch(index) {
    case 0:
      return <Profile />;
    case 1:
      return <Projects />;
    case 2:
      return <Skills />;
    case 3:
      return <Experience />;
    case 4:
      return <Education />;
    case 5:
      return <Contact />;
    default:
      return null;
  }
}

export default PageRouter;
