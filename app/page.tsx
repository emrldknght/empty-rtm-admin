'use client';

import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import {Button, Container, Flex} from "@mantine/core";
import React from "react";
import useAuthStore from "@/stores/authStore";
import {redirect} from "next/navigation";
import {LogOut} from "react-feather";

export default function HomePage() {
  const {authToken,logOut} = useAuthStore();

  if (!authToken) {
    return redirect('/auth');
  }

  return (
    <>
      <Container>
        <Flex justify="flex-end" align="center"
          style={{marginTop: '1rem', marginBottom: '1rem'}}
        >
          <Button
            type="button"
            rightSection={<LogOut size={16} />}
            onClick={() => logOut()}
          >
            Logout
          </Button>
        </Flex>
      </Container>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
