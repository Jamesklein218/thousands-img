import axios from 'axios'
import Image from 'next/image';

import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const res = await axios.get("https://randomuser.me/api/?results=1000")
  console.log(res.data.results);
  return {
    props: {
      people: res.data.results,
    }
  }
}


export default function Home({ people }) {
  return (
    <div className={styles.container}>
      {people.map(person => {
        return <Image
        key={person.id.name}
        src={person.picture.large}
        width="250px"
        height="250px"
        alt={person.name.title + " " + person.name.first + " " + person.name.last} 
        />
      })}
    </div>
  )
}


