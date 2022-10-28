import type {  GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Experiance from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperience } from '../utils/fetshExperience'
import { fetchPageInfo } from '../utils/fetshPageInfo'
import { fetchProjects } from '../utils/fetshProject'
import { fetchSkills } from '../utils/fetshSkill'
import { fetchSocials } from '../utils/fetshSocials'


type Props={
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences , projects , skills, socials }:Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20 ">
      <Head>
        <title>Souhail Portfolio</title>
       
      </Head>

      <Header socials={socials}/>
      <section id="hero" className='snap-center'>
      <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>

      
      <section id="experiences" className='snap-end'>
        <Experiance experiences={experiences}/>

      </section>
      
      <section id="skills" className="snap-start">
        <Skills skills = {skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="Contact" className="snap-end">
        <ContactMe pageInfo={pageInfo} />
      </section>

    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {

  const pageInfo : PageInfo = await fetchPageInfo() ;
  const skills: Skill[] = await fetchSkills();
  const experiences: Experience[] = await fetchExperience();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
     
    } , revalidate: 10
  };

}