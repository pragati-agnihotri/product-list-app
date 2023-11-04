import React from 'react';
import ProductList from '../components/ProductList';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 //body {
 //   font-family: Arial, sans-serif;
 //   margin: 10px;
 //   padding: 2%;
 //   background-color: #f9f9f9;
 // }
 body {
   font-family: "Work Sans", sans-serif;
   margin: 0;
   padding: 0;
   background-color: #f9f9f9;
 }

 html {
   font-size: 62.5%;
 }

 body {
   overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
   scrollbar-width: thin;
 }

 body::-webkit-scrollbar {
   width: 1.5rem;
 }

 body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
 }

 body::-webkit-scrollbar-thumb {
   background: #fff;
   border: 5px solid transparent;
   border-radius: 9px;
   background-clip: content-box;
 }
`;
export default GlobalStyles;