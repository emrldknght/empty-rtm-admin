import {FighterRaw} from "@/types";
import {Container} from "@mantine/core";

interface Props {
  fighters: FighterRaw[]
}

const Fighters = ({ fighters }: Props ) => {
  return (
    <>
      <Container>
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
      </Container>
    </>
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