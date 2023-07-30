import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
    <ProjectCard 
    sklh="SDK Harapan"
    almt="Jl. Pulau Saelus, Pedungan, Denpasar Selatan, Kota Denpasar, Bali"
    img={'/SDKSMP.png'}
    google="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15776.269340051782!2d115.2113415!3d-8.685147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241b84bf2ef63%3A0x97af5205f90c889!2sSdk%20harapan!5e0!3m2!1sid!2sid!4v1690636880616!5m2!1sid!2sid"
    />
    <ProjectCard
    sklh="SMPK 1 Harapan"
    almt="Jl. Pulau Saelus, Pedungan, Denpasar Selatan, Kota Denpasar, Bali"
    img={'/SDKSMP.png'}
    google="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15776.269340051782!2d115.2113415!3d-8.685147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241b84bf2ef63%3A0x97af5205f90c889!2sSdk%20harapan!5e0!3m2!1sid!2sid!4v1690636880616!5m2!1sid!2sid"
    />
    <ProjectCard
    sklh="SMK TI BALI GLOBAL"
    almt="Jl. Tukad Citarum No.44, Dauh Puri Klod, Denpasar Selatan, Kota Denpasar, Bali"
    img={'/TIBALI.png'}
    google="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0858463409495!2d115.23408319999999!3d-8.6833864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240f8dacfaa33%3A0xaaa0cf96efaac43b!2sSmk%20Ti%20Bali%20Global%20Denpasar%2C%20Dauh%20Puri%20Klod%2C%20Kec.%20Denpasar%20Bar.%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1690638686382!5m2!1sid!2sid"
    />
    </div>
  )
};

export default Projects;
