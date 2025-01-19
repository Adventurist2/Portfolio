"use Client";
import { createContext, useContext, useRef } from 'react';

export const Refcontext = createContext<any>(null);

export default function Appcontext({children}:any) {
    const skillRef= useRef<HTMLDivElement|null>(null);
    const AboutRef = useRef<HTMLDivElement|null>(null);
    const ProjectRef = useRef<HTMLDivElement|null>(null);
    const ContactRef = useRef<HTMLDivElement|null>(null);
    const HeroRef = useRef<HTMLDivElement|null>(null);

    return (
        <Refcontext.Provider value={{skillRef,AboutRef,ProjectRef,ContactRef,HeroRef}}>
            {
                children
            }
        </Refcontext.Provider>
    )

}