import Row from "./Row"

const Grid = () =>{
  const rows = [1,2,3,4,5]
  return(
    <div className="m-4">
      {
        rows.map((row,index)=> <Row key={index} id={index}/>)
      }
    </div>
  )
}

export default Grid