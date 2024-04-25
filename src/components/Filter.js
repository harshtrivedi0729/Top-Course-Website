import React from 'react'

// App.js ma j props lakhiya che te apde ahiya input prameter ma ahiya 
const Filter = (props) => {
  // ana thi apdi pase filter-data avi jashe
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    /* apde koi pan button upar click kariye chiye to te button nu title apde parameter ma apelu che j thi setCategory ma te title set thai jashe */       
    function filterHandler(title) {
        setCategory(title);
    }

    // have apde aa j filter ni ander j 5 data che [all,development,business,etc] tele apde button ma convert karvu che..and aek sathe badha ne to apde badha upar map function lagavi daishu
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
    {/* darek filter-data mate map function no use karine apde ahiya button banaviyu che  */}
      {
        /* MULTIPLE DATA NI ANDER MULTIPLE ELEMENTS CREAT KARVA HOY TO APDE MAP NO USE KARIYE CHIYE..ahiya filter-data(multiple-data) ne button(multiple element) ma conver kariye chiye mate map function no  use karelo che   */
        filterData.map( (data) => (  
          /* apde koi pan button upar click kariye chiye to te button nu title apde parameter ma apelu che j thi setCategory ma te title set thai jashe */
            <button
            // //  j button che selected teni border ne apde highlight karva avu karelu che  
            // ${category === data.title ? 
            // "bg-opacity-60 border-white" :
            // "bg-opacity-40 border-transparent"} //
            className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === data.title ? 
            "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"}
            `}
            // map kariyu che mate "key" apavi jaruri che 
            // button no text a data na title jetalu hase
             key={data.id}
             onClick ={() => filterHandler(data.title)}
             >{data.title}</button>
        ))
      }
    </div>
  )
}

export default Filter
