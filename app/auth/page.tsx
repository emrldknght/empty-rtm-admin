'use client';

import { Button, Flex, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import useAuthStore from "@/stores/authStore";
import {redirect} from "next/navigation";


const AuthPage = () => {
  const { authToken, login, password, save, error, setSave, authorize } = useAuthStore();

  if (authToken) {
    return redirect('/');
  }

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      login: '',
      password: '',
    },
  });

  const authorizeForm = async (values: Record<string, string>) => {
    const { login, password } = values;
    await authorize({ login, password });
  };

  const S = {
    width: '50vw',
    margin: '0 auto',
  };

  return (
    <Flex direction="column" style={S}>
      <h1>Login screen</h1>

      <div>{authToken}</div>

      <div className="wrapper">
        {error && <span className="error">{error}</span>}

        {/*
          <div style={{ width: '100%', textAlign: 'center', fontWeight: 'bolder' }}>
            Login screen
          </div>
          */}
        <form className="form" onSubmit={form.onSubmit((values) => authorizeForm(values))}>
          <label htmlFor="u-pass">Login: [{login}]</label>
          <TextInput
            withAsterisk
            label="Login:"
            name="username"
            key={form.key('login')}
            {...form.getInputProps('login')}
          />
          <label htmlFor="u-pass">Password: [{password}]</label>
          <PasswordInput
            withAsterisk
            label="Password:"
            name="password"
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <label>
            <input
              checked={save}
              onChange={(e) => setSave(e.target.checked)}
              type="checkbox"
            />
            Save [{save}]
          </label>
          <br />
          <Button type="submit">Go!</Button>
        </form>
      </div>
    </Flex>
  );
};

export default AuthPage;
