'use client';

import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '@/components/Welcome/Welcome';
import React from "react";
import useAuthStore from "@/stores/authStore";
import {redirect} from "next/navigation";

export default function HomePage() {
  const {authToken} = useAuthStore();

  if (!authToken) {
    return redirect('/auth');
  }

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
