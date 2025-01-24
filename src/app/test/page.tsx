import { FormEvent } from "react";
import { handleSubmit } from "./action";
import Link from "next/link";
import { cookies } from "next/headers";

export default function TestComponent() {
  console.log("TestComponent");
  let _ = cookies()
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
    <>
      <Link href="/">Teasdasdasst</Link>
    </>
  );  
}
   