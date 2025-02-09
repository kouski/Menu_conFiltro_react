
import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from './data';


/* const tempCategories = menu.map(tempitem=>tempitem.category);
const tempSet = new Set(tempCategories);
const tempItems = ['All', ...tempSet]
console.log(tempItems); */

const allCategories = ['All', ...new Set(menu.map(tempitem=>tempitem.category))]



const App = () => {

const[menuItems, setMenuItems]= useState(menu)
const[categories, setCategories]= useState(allCategories)
const filterItems = (category)=>{

if(category === 'All'){
  setMenuItems(menu)
  return;
}
const newItems = menu.filter((item)=>item.category === category)
setMenuItems(newItems)
}



  return (
    <main>
      <section className="menu">
        <Title text='our menu'/>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
        
      </section>

    </main>
  );
};
export default App;
