/*
import {makeAutoObservable} from "mobx";
import {auth} from "@/api/auth";

export class AuthStore {
  authToken = ''

  login = ''
  password = ''
  save = false
  error = ''

  constructor() {
    makeAutoObservable(this)

    /*
    makePersistable(this, {
      name: 'authStore',
      properties: ['authToken', 'save'],
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
      // storage:  window.localStorage
    })

    console.log('b', this.authToken)
    console.log('b', this.save)

  }

  setAuthToken(token: string) {
    this.authToken = token
  }

  setLogin(login: string) {
    this.login = login
  }

  setPassword(password: string) {
    this.password = password
  }

  setSave(save: boolean) {
    this.save = save
  }

  setError(error: string) {
    this.error = error
  }

  async authorize({login, password}: { login: string, password: string }) {
    this.error = ''

    const res = await auth(login, password)
    if (res.error) {
      this.setError(res.error)
      return
    }
    const {token} = res
    if (token) {
      this.setAuthToken(token)
    }
  }
}

export default new AuthStore()
*/
import { create } from 'zustand';
import {auth} from "@/api/auth";
import {persist} from "zustand/middleware";

interface IAuthStore {
  authToken: string;
  login: string;
  password: string;
  save: boolean;
  error: string;
  setAuthToken: (token: string) => void;
  setLogin: (login: string) => void;
  setPassword: (password: string) => void;
  setSave: (save: boolean) => void;
  setError: (error: string) => void;
  authorize: ({ login, password }: { login: string, password: string }) => Promise<void>;
  logOut: () => void;
}

const useAuthStore = create<IAuthStore>()(
    persist((set, _get) => ({
      authToken: '',
      login: '',
      password: '',
      save: false,
      error: '',

      setAuthToken: (token: string) => set({ authToken: token }),
      setLogin: (login: string) => set({ login }),
      setPassword: (password: string) => set({ password }),
      setSave: (save: boolean) => set({ save }),
      setError: (error: string) => set({ error }),
      authorize: async ({login, password}: { login: string, password: string }) => {
        set({ error: '' });

        const res = await auth(login, password)
        if (res.error) {
          set({ error: res.error });
          return
        }
        const {token} = res
        if (token) {
          set({ authToken: token });
        }
      },
      logOut: () => set({ authToken: '' }),
    }),
    { name: 'p-auth-store' }
  )
);

export default useAuthStore;