import React from 'react'
import Card from './Card';
import { useState } from 'react';

// cards ni ander apde j app.js ma lakhela props hoy te props apde ahiya input-parameter ma apiya 
const Cards = (props) => {
  // aa promise ape che 
    let courses = props.courses;
    let category = props.category;
    //logic...koi pna component a like che k dislike te k v rite khabar padshe?..to apde aa badhu store karavavu padshe...k kato component a like che and kayo component a dislike che te.....have apde aa akhi vat ne "cards.js" ma samjavishu kem k cards.js ma badha j cards ni vat thay che jyare...ahiya(card.js) ma khali aek j card ni vat thay che.......and ha starting ma like/liked course ni array banaviye to starting ma te empty hase
    // starting ma likecourse ni array empty j hashe kem k starting ma koi pan course liked nahi hoy
    const [likedCourses, setLikedCourses] = useState([]);
    
    // aa getcourse fucntion che te badha j course no data aek single array ma nakhi ne ape che.....atle k j catagory wise alaga alag course hata te badha ne aek j array ma atyre nakhi do 
    // ...and ahiya allcourse ma 2 vastu che 1). course ni category(KEY) and 2). course na video(value)[j array na form ma che atyre] ..have apde khali value ni j jarur che ahiya mate apde khali
    //  value lai ne forEach loop chalayo....have tena thi apanane course-catagory mali jeni alag thi array che j array ni ander te perticulor category ni video che and....and badhi j value(course na video ne) aek j (main array banavi ne tema nakhi didhi)array[j ne apde allcourse naam apiyu che] ma nakhi didha

    // it returns you a list of all couirses recevied from the API response........akha courses no data teni value sathe aa allcourse vali emoty array ma apde nakhshiyo aa function ni help thi 
    function getCourses() {
      
        if(category === "All") {
          // empty array banavi
            let allCourses = [];
            // object ni value upar apde forEach loop chalayo 

            // apde aek single array ma akho data hovo joiye to j MAP function lagu padshe mate apde "Object.values" karishu to te "Object" ni {key,value}[{buniness,buniness-course}] mathi j khali value hase te j apshe and
            // j thi badhi j key jati raheshe and khali value j apdi pase bachi raheshe mate te aek j array ma avi jashe koi aa array ne separate karva mate vache KEY nahi hoy j pahela hati...........have aa j single array bani[main] tena upar apde forEach loop lagavi didho j thi courses i value upar aek loop lagiyo kahevay........
            // have aa j array mali ne tena darek element sudhi java mate apde forEach loop lagavishu [j thi array na badha j element upar apde jai shakiye]...atle k j main array che ,teni subarray ma apde loop chavishu...for example...apdi pase aek main array mali j ma juda-juda Object business,webdevelopment,data-science..etc course che te {object ni key thashe} course ni ander j videos che te object ni value che ...have aa badha j juda-juda object ni value che te bheji thai ne aek main array bane che j ma badhi j Object ni sub-array bhegi thai ne aek main array banavshe j na upar travel karva apde sauthi-pahela forEach loop lagayo ..aaa main array ma j sub-array che te aa juda-juda Object(business,webdevelopment,data-science) ni j value vali array che te che ...have aa juda-juda Object ni areay upar travel karvva apde bijo(2nd) for Each loop lagaviyo.

            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            //main sirf specific categiry ka data array krunga  
            return courses[category];      
        }

    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        /* apde darek data ne map karaviye chiye and darek data mate card banaviye chiye */
        /* map kariyu che mate apde "key" pass karvi jaruri che  */
        /* card ne apde j course che teno data apiye chiye mate "course = {course}" lakhiyu che ...atle aek card ne aek card no data mali jashe */
        getCourses().map( (course) => (
            <Card key={course.id} 
            course = {course} 
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards
