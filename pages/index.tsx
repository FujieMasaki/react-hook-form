import type { NextPage } from 'next'
import LaborTimeInput from '../components/LaborTimeInput';
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className="flex justify-center mx-50px">
      <div>
        <h1 className="text-center">React-hook-form</h1>
        <LaborTimeInput/>
      </div>
      <div>
        <p>React-hook-form</p>
      </div>
    </div>
  );
}

export default Home
