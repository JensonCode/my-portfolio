import Intro from '@/components/Intro';
import Project from '@/components/Project';
import About from '@/components/About';
import Contact from '@/components/Contact';
import FixedSocialMedia from '@/components/pageTools/FixedSocialMedia';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
      <Intro />
      <Project />
      <About />
      <Contact />
      <FixedSocialMedia />
      {/* <Footer /> */}
    </>
  );
}
