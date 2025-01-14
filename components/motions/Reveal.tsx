"use client"
import React,{useEffect,useRef} from "react";
import { motion,useInView,useAnimation,useIsPresent } from "framer-motion";


export function Reveal({children}:{children:React.ReactNode}){
    return <div>
        <motion.div
            variants = {{
                hidden:{opacity:0,y:75},
                visible:{
                    opacity:1,
                    y:1
                }
            }}
            initial = "hidden"
            animate = "visible"
            transition = {{duration:0.5,delay:0.25}}
        >
            {children}
        </motion.div>
        
    </div>
}