import React, { ReactNode } from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "Joker - Controle Financeiro" }: Props) {
  return (
    <div className="flex">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Sidebar />
      <div>
        <header className="bg-indigo-800 text-gray-800 font-bold px-4 py-2 flex justify-between">
          <h1 className="border-2 rounded-2xl p-1 bg-indigo-500 ">Home</h1>
          <button className="border-2 rounded-2xl p-1 bg-green-300 font-bold">
            LogIn
          </button>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </div>
  );
}

export default Layout;
