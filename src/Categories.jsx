

export default function Categories({categories}) {
  return (
    <div className="btn-container">
        {categories.map(category=>{
            return <button type="button" className="btn" key={category}>{category}</button>
        })}
        
        </div>
  )
}
