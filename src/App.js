import React,{useState} from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from './data'


  const newItems = items.map((item)=>item.category)
  const newCat = ['all', ...new Set(newItems)]
  

console.log(newCat)

function App() {
  const [menuItems,setMenuItems] = useState(items)
  const [categories,setCategories] = useState(newCat)

  const filterItems=(category)=>{
    if(category === 'all'){
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item)=>item.category === category)
    setMenuItems(newItems)
  }

  return (
    
      <main className="App-header">
       <section>
        <div>
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
                filterItems={filterItems}
                categories = {categories}    
        />
        <Menu
            items={menuItems}
        />
       </section>
      </main>
  
  );
}

export default App;
