
import DynamicComponent from "@/components/test/dynamic_compoent"

const layout=({children}:{children:React.ReactNode}) =>{
  const data = async() =>{

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => console.log(err));

    // console.log("res" ,res)
    return res
  }

  const ress= data()
return(
    <>
        <div>
    </div>
      {children}
    </>)
}
export default layout


    