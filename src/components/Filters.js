import React from 'react';
function Filters({ setFilter, setSort  }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  


  return (
    <div>
      <label>Filter: </label>
      <input
        type="text"
        placeholder="Search"
        onChange={handleFilterChange}
        style={{outline:"none",width: '200px',height:'40px' , border: "1px solid #FFFFFF", borderRadius: '10px', padding:'1px', margin:'2px'}}
      />
        <div  style={{width: '20px'}}></div>
      <label>Sort by: </label>
      <select onChange={handleSortChange} style={{outline:"none",width: '200px',height:'40px' , border: "1px solid #FFFFFF", borderRadius: '10px', padding:'1px', margin:'2px'}}>
        <option value="">None</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
}

export default Filters;