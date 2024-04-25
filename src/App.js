import React from "react";
import Navbar from  "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
// apde API ne import kari 
import { apiUrl, filterData  } from "./data";
// useState and useEffect ne import kariyu
import { useState,useEffect } from "react";
import Spinner from "./components/Spinner";

// MMMMMIIIIIIMMMMPPP
// "TOAST" ne add karva mate apde 'TOAST-CONTAINER' add karelu hovu joiye..........aaa 'TOAST-CONTAINER' a apde "App.js" ni ander or "parent_file.js/index.js" jai ne pan aa "TOAST-CONTAINER" add kari shakiye chiye
import {toast} from "react-toastify";


const App = () => { 
  // niche j pan che tene apde state variable kahiye chiye
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  // by default apde "All" vala Data ma aa abadha cards ne dekhadvu che mate apde ahiya 'filterData[0].title' karelu che 
  const [category, setCategory] = useState(filterData[0].title);

  // course no data API ma che mate tene apde fetch kari
  async function fetchData() {
    // jya sudhi API mathi call ave che tya sudhi apde j LOADING thay che tene apde TRUE mark karishu
    setLoading(true);
    try{
      // API pade thi apde data lidho
      let response = await fetch(apiUrl);
      // API mathi j data malelo hoy te data ne apde dar-vakhat ni jem .JSON format ma convert kariyu
      let output = await response.json();
      ///output no data -> 
      setCourses(output.data);
    }
    catch(error) {
      // toast upar apde error dekhadi
        toast.error("Network me koi Problem hai");
    }
    // API mathi data avi jay atle apde LOADING ne FALSE KARISHU
    setLoading(false);
  }

  // apde component banaviya pachi koi task karavavu hoy to apde 'useEffect' hook no use kariye chiye, apde ahia components banaviya have API call 
  // karvo che and data ne fetch karvo che mate apde te mujab 'useEffect' hook no use karishu

  // apde useEffect ma fetch data ne call kariyo
  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    // top layer DIV
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        <div>
        {/* props ni help thi j import karavelu filterdata che tene access karishu */}
        {/* value leva mate apde "{}" no use kariye chiye */}
          <Filter 
          filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {/* jo loading true hoy to spinner(loading) ne dekhado jo loading false thay to apde course vala cards ne dekhado */}
        {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>


    </div>
  );
};

export default App;
