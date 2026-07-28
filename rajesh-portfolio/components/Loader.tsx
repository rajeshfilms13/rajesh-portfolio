"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {

  const [loading,setLoading]=useState(true);

  useEffect(()=>{

    const timer=setTimeout(()=>{
      setLoading(false);
    },2500);

    return ()=>clearTimeout(timer);

  },[]);

  return(

<AnimatePresence>

{loading && (

<motion.div

initial={{opacity:1}}

exit={{opacity:0}}

transition={{duration:1}}

className="fixed inset-0 bg-black z-[999] flex items-center justify-center"

>

<div className="text-center">

<p className="tracking-[10px] text-gray-400">

ROLL CAMERA

</p>

<h1 className="text-8xl mt-6">

ACTION

</h1>

</div>

</motion.div>

)}

</AnimatePresence>

  )

}