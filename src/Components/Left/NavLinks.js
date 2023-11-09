import { FaGithub } from "react-icons/fa";
import { BsLinkedin} from "react-icons/bs";

export default function NavLinks() {
  const resumePath = process.env.PUBLIC_URL + '/pictures/resume.pdf';


  return (
    <div > 
      <ul className="flex justify-center items-center ">
        <li className="text-white mr-5 text-4xl cursor-pointer shadow-xl">
          <a href="https://github.com/AlexSteeves?tab=repositories"><FaGithub /></a>
        </li>
        <li className="text-white text-4xl cursor-pointer shadow-xl">
          <a href="https://www.linkedin.com/in/alexander-steeves-8122b8178/"><BsLinkedin /></a>
        </li>
      </ul>
      <h1 className="flex justify-center items-center pt-2 text-xl underline underline-offset-2 font-thin"><a rel="noreferrer" target = '_blank' href= {resumePath}>Resume</a></h1>
    </div >
  );
}
