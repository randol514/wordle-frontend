import Key from "./Key";

const Keyboard = () =>{
  const set1 = ['Q','W','E','R', 'T', 'Y', 'U','I','O','P'];
  const set2 = ['A','S','D','F', 'G', 'H', 'J','K','L'];
  const set3 = ['Z','X','C','V', 'B', 'N', 'M'];

  const Set1 = () => {
    return (
      <div className="flex">
        {
          set1.map((char,index) => <Key key={index} letter={char}/>)
        }
      </div>
    )
  }

  const Set2 = () =>{
    return (
      <div className="flex">
        {
          set2.map((char,index) => <Key key={index} letter={char}/>)
        }
      </div>
    )
  }

  const Set3 = () =>{
    return (
      <div className="flex">
        <Key big={true} letter={'ENTER'}/>
        {
          set3.map((char,index) => <Key key={index} letter={char}/>)
        }
        <Key big={true} letter={'Back'}/>
      </div>
    )
  }

  return(
    <div className="max-w-[638px] m-auto mt-20">
      <div className="flex flex-wrap justify-center bg-[#DADCE04D] bg-opacity-30 p-[33px] rounded-[15px]">
        <Set1 />
        <Set2 />
        <Set3 />
      </div>
    </div>
    
  )
}

export default Keyboard