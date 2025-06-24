'use client';

import useAuthStore from "@/stores/authStore";
import useFightersStore from "@/stores/fightersStore";
import React, {useEffect} from "react";
import Fighters from "@/components/Fighters";
import {CommonLoader} from "@/components/CommonLoader";

export default function FightersPage() {
  const { authToken } = useAuthStore();
  const { fighters, fetch } = useFightersStore();

  useEffect(() => {
    console.log('token', authToken)
  }, [authToken]);

  useEffect(() => {
    fetch();
  }, []);

  if (!authToken) {
    return (
      <CommonLoader />
    )
  }

  return (
    <>
      <Fighters fighters={fighters}/>
    </>
  );

}