import React from 'react'
// react ma icon ne lavava mate apde import karaviyu
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    // props thi data apde course ma lidho
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        //logic...koi pna component a like che k dislike te k v rite khabar padshe?..to apde aa badhu store karavavu padshe...k kato component a like che and kayo component a dislike che te.....have apde aa akhi vat ne "cards.js" ma samjavishu kem k cards.js ma badha j cards ni vat thay che jyare...ahiya(card.js) ma khali aek j card ni vat thay che.......and ha starting ma like/liked course ni array banaviye to starting ma te empty hase
        // niche nu seantance kahe che k ...likedCourses array ni ander current course ni "course.id" padi che...atle k already te course linked che......to apde aa j liked che j pan course te course ne apde like mathi dislike karva nu che atle k teni like dur karva ni che 
        if(likedCourses.includes(course.id)) {
            //pehle se like hua pada tha
            // ama apde course ni previous state lidhi[atle k j akhi liked array che tene ahiya previous state kidhu che] and tena upar filtering karishu and badha j course ne remove karo j ni ID a apda course(current) ni ID che[atle k j liked course ni array che tema thi j ni ID a apda current course ni ID na Equal hoy tene linked array mathi remove karo] .....apde linked ni ander a vala course nakhiya j ni id current course ni ID jetali nathi(current course ni ID ne Equal nathi)......atle k j liked array(for example [1,2,3,4,5]) che tema apde jo ID(apdi ID=4 mano) match nahi thati hoy to te element(element j match nathi thata teni ID [1,2,3,5]) ne linked array ma rakho(atle have ID(4) ne match na thata hoy te j element([1,2,3,5]) j aalinked array ma rashe) and j ni ID match thay che(ID=4) tene liked array mathi kadhi daishu j thi linked arrray[1,2,3,5] thashe
            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
            toast.warning("like removed");
        }
        else {
            //pehle se like nahi hai ye course
            //to fir hame insert karna h ye course liked courses me 
            // jo liked course ni array empty hase to apde ama course ni id set karishu
            if(likedCourses.length === 0 ) {
                setLikedCourses([course.id]);
            }
            else {
                //non-empty length pehle se
                // ama apde j previous state no data che tene to apde nakhishu j pan jode jode j aa current course che teno data pan apde nakhishu
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
    {/* pahela image joiye che and pachi button joiye che */}
        <div className='relative'>
            <img src={course.image.url} alt=''/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        /* button ni ander icon(heart valu) laviye chiye niche mujab */
                        /* react ni andar icon lav-va ni rit che ...........j heart valu icon ave che ne tene lavva mate apde aa code lakhiyo */
                        /* anu logic che k jo current course a liked course ni array ma che [atle k pahela thi j liked che] to FcLike valu icon avshe and jo nahi hoy to 'FcLikePlaceholder' nu icon avshe */
                        likedCourses.includes(course.id) ? 
                        /* Custome HTML element banaviyu '<FcLike></FcLike>' */
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>
        

        {/* button pachi 2 paragraph che to te 2 paragraph ne apde add kariye chiye */}
        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>
            {/* course ni length strting ma dekhadva aavu lakhiyu */}
                    {
                        course.description.length >100 ? 
                        (course.description.substr(0,100)) + "..." :
                        (course.description)
                    }
            </p>
        </div>
    </div>
  )
}

export default Card
