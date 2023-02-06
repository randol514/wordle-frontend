import { useEffect, useState , useContext} from "react"
import { WordleContext } from "../../App"

const Tile = ({id , rowId}) =>{
  const [letter  , setLetter]= useState('')
  const [completed , setCompleted] = useState(true)
  const {guessWord , word , currentRow , completedRows} = useContext(WordleContext)
  const [colors , setColor] = useState({back:"#939B9F4D" , font:"black"})

  const style={
    backgroundColor: colors.back,
    color: colors.font
  }

  useEffect(()=>{
    if(currentRow === rowId){
      setLetter(guessWord[id])
    }
    if(completedRows.includes(rowId) && completed){
      changeColors()
      setCompleted(false)
    }
  },[guessWord ,completedRows ])

  const changeColors = () =>{
    const arrayWord = word.split('')
    if(arrayWord.includes(letter)){
        if (arrayWord[id]===letter){  
            return setColor({back:'#66A060' , font:'white'})
        }
        return setColor({back:'#CEB02C', font:'white'})
    }
    return setColor({back:"#939B9F" , font:"white"})
  }

  return(
      <div style={style} className="flex justify-center my-[6px] m-[6px] items-center w-[76px] h-[76px] rounded-[5px] bg-[#939B9F4D]">
        <p className="flex self-center mb-0 font-bold text-5xl">{letter}</p>
      </div>
  )

  
}

export default Tile