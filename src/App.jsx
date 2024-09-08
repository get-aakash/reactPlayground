const poem = {
  lines:[
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
}

export default function Poem() {
  let content = []
  
  poem.lines.forEach((line,i)=>{
    content.push(
      <hr  />
    )
    content.push(
      <p >
        {line}
      </p>
    )
  })
  content.shift()
  
  return (
    <article>
      
      {content}
    
      
    </article>
  );
}