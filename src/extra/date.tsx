"use client"
import { useEffect, useState } from "react"

export const getDate = () => {

    const [currentDate,setCurrentDate] = useState("");

    
    useEffect(() => {
        
        const date = new Date();
        const options : Intl.DateTimeFormatOptions = {
            year : "numeric",
            month : "long",
            day : "numeric"
        };

        setCurrentDate(date.toLocaleDateString("en-us",options));
    },[]);

    return currentDate;

}