export default function App(){
  return (
    <div>
      <ToolBar onPlay = {()=>alert("Playing!")} />
    </div>
  )
}

function ToolBar({onPlay}){
  return(
    <Button onclick={onPlay}>Play Button</Button>
  )

}

function Button({onclick, children}){
  return(
    <button onClick={onclick}>{children}</button>
  )
  

}