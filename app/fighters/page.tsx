'use client';

import useAuthStore from "@/stores/authStore";
import useFightersStore from "@/stores/fightersStore";
import {redirect} from "next/navigation";
import React, {useEffect} from "react";
import Fighters from "@/components/Fighters";

export default function FightersPage() {
  const { authToken,logOut } = useAuthStore();
  const { fighters, fetch } = useFightersStore();

  if (!authToken) {
    console.warn('no auth')
    // return redirect('/auth');
  }

  useEffect(() => {
    console.log('token', authToken)
  }, [authToken]);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Fighters fighters={fighters}/>
    </>
  );

}