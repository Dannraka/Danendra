import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg flex flex-col gap-6">
        <p>
          Hello. I'm Danendra,  I'am a web developer with 1 years of experience. 
          i'm a student from SMK TI BALI GLOBAL Denpasar. I studied programming when I entered SMK.
          I have an interest in this field, because I had aspirations since childhood to make robots.
          the languages ​​I'm currently learning are C++, HTML, CSS, JavaScript, Bootstraps, Next JS, TypeScript, React, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
