function Item({name, importance}){
  return(
    <li className="item">
      {name} {importance>0&&"(Importance: "+importance+")"}
    </li>
    
  )
}

export default function PackingList(){
  return(
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
        importance={9}
        name="Space suit"
        />
        <Item
        importance={0}
        name="Helmet with golden heart"
        />
        <Item
        importance={6}
        name="Photo of Tam"
        />
      </ul>
    </section>
  )
}