// bu home pagemizi renderleyecek

import Feed from "@components/Feed";
import { NavWithSession } from "@components/Nav";
import { SessionProvider } from "next-auth/react";



const Home =() => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text_center">
        find the way & be happy
        <br className="max-lg:hidden"/>
        <Nav/>
        <span className="orange_gradient text-center">
          Fast&Find is platform that you are willing to use
        </span>
      </h1>
      <p className="desc text-center">Fast&Find is platform that you are willing to use</p>
      <SessionProvider/>
      <NavWithSession />
      <Feed/>
    </section>
  );
}

export default Home;