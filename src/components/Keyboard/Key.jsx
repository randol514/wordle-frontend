import { useContext } from "react"
import { WordleContext } from "../../App"

const Key = (props) =>{
  const {guessTheWord , backspace , pressEnter} = useContext(WordleContext)
  
  const handleClickForBig = () =>{
    if(props.letter == "ENTER"){
      pressEnter()
    }
    else {
        backspace()
    }
}

if(props.big){
    return(
        <button className="flex justify-center my-[5px] m-[5px] items-center w-[71px] h-[51px] rounded-[5px] bg-[#D3D6DA]"
         onClick={()=> handleClickForBig()}>
          {props.letter}</button>
)
}

return(
   
    <button className="flex justify-center my-[5px] m-[5px] items-center w-[44px] h-[51px] rounded-[5px] bg-[#D3D6DA]"
     onClick={()=> guessTheWord(props.letter)}
      >{props.letter}</button>
)
  
}

export default Key