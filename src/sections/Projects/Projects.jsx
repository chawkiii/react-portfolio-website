import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitlift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={viberr} 
          link='https://github.com/chawkiii/avocat'
          h3='Lawyer Website Template'
          p='Lawyer website template using html css javascript... with some fonctionalities as contact form, maps, with SEO and good design.'
        />
        <ProjectCard 
          src={freshBurger} 
          link='https://github.com/chawkiii/monopoly_app'
          h3='Monopoly Game'
          p='Monopoly game using html css javascript and probably some react... etc'
        />
        <ProjectCard 
          src={hipsster} 
          link='https://github.com/chawkiii/b.broderie'
          h3='Emboderie Website'
          p='B.Broderie Website is an embodery Webpage using html css and some javascript...'
        />
        <ProjectCard 
          src={fitlift} 
          link='https://github.com/chawkiii/Shi-Fu-Mi'
          h3='Shi Fu Mi'
          p='A good looking game of Shi Fu Me ^^'
        />
      </div>
    </section>
  )
}

export default Projects