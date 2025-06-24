'use client';

import React from 'react';
import {Home, List, LogOut as LogOutIcon, Menu as MenuIcon} from 'react-feather';
import {Button, Container, Flex, Menu} from '@mantine/core';
import useAuthStore from '@/stores/authStore';

export const TopMenu = () => {
  const { authToken, logOut } = useAuthStore();

  return (
    <>
      <Container>
        <Flex
          justify="flex-start"
          align="center"
          style={{ marginTop: '1rem', marginBottom: '1rem' }}
        >
          <Menu position="bottom-start">
            <Menu.Target>
              <Button>
                <MenuIcon size={16} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Pages</Menu.Label>
              <Menu.Item leftSection={<Home size={16} />}>
                <a href="/">Home</a>
              </Menu.Item>
              <Menu.Item leftSection={<List size={16} />}>
                <a href="/fighters">Fighters</a>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          {(authToken) &&
            <Button
              type="button"
              rightSection={<LogOutIcon size={16} />}
              style={{ marginLeft: 'auto' }}
              onClick={() => logOut()}
            >
              Logout
            </Button>
          }
        </Flex>
      </Container>
    </>
  );
};
