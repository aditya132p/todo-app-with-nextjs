"use client"
import { store } from '@/app/Store';

import React from 'react'
import { Provider } from "react-redux";
 

const Providers = ({
    children, 
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <Provider store={store}> {children}</Provider>
  )
}

export default Providers