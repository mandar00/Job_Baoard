import JobResults from "@/components/JobResults";
import JobsFilterSidebar from "@/components/JobsFilterSidebar";
import DynamicComponent from "@/components/test/dynamic_compoent";
import H1 from "@/components/ui/h1";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const data = async() =>{

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => console.log(err));

    // console.log("res" ,res)
    return res
  }

  const ress= data()
  return (
    <main className="m-auto max-w-5xl">
      {/* <div className="space-y-3">
        <div className="text-center">
          <H1>Developer Jobs</H1>
          <p className="text-muted-foreground font-light">Find your dream job.</p>
        </div>
        <section className="flex flex-col md:flex-row gap-2 ">
          <JobsFilterSidebar/>
          <JobResults/>
        </section>
      </div> */}
      <Link href="/test">asdhasdlik</Link>
      <DynamicComponent />
    </main>
  );
}
