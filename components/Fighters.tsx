import {FighterRaw} from "@/types";

interface Props {
  fighters: FighterRaw[]
}

const Fighters = ({ fighters }: Props ) => {
  return (
    <div>
      <h1>Fighters</h1>
      <ul>
        {
          fighters.map(fighter => (
            <li key={fighter.id}>
              {fighter.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:8080/api/fighters_list');
  const fighters = await response.json();

  return {
    props: {
      fighters
    }
  }
}

export default Fighters;