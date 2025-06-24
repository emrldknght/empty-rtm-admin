import {Container, Flex, Loader} from "@mantine/core";
import {CSSProperties} from "react";

const CS: CSSProperties = {
  // backgroundColor: 'rgba(0, 0, 0, 0.6)',
  // minHeight: '40vh'
}
const FS: CSSProperties = {
  // backgroundColor: 'rgba(0, 0, 0, 0.6)',
  minHeight: '50vh'
}

export const CommonLoader = () => {
  return (
    <Container style={CS}>
      <Flex align="center" justify="center"
            style={FS}
      >
        <Loader color="blue" />
      </Flex>
    </Container>
  )
}

