

export default function Profile(){
  const content = []
  const products = [
    {id:1, name:"t-shirts", price:20.99},
    {id:2, name:"pants", price:50.99},
    {id:3, name:"shoes", price:80.99},
    {id:4, name:"jeans", price:30.99}
  ]
  products.forEach((product)=>{
  content.push(<li>{product.name}</li>

  )})
  return (
    <div className="container">
      <h2>Product details</h2>
      <ul>
        {content}
      </ul>

    </div>
  )
}