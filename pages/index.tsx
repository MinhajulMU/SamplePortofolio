import type { NextPage } from 'next'
import Layout from '../components/Layout';
import Hero from "../components/Hero"
import About from "../components/About"
import TechStack from "../components/TechStack"
import Contact from "../components/Contact"
const Home: NextPage = () => {
  return (
    <div>
      <Layout title="Home">
        <Hero></Hero>
        <About></About>
        <TechStack></TechStack>
        <Contact></Contact>
      </Layout>
    </div>
  )
}

export default Home
