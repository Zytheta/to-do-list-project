// This module controls the local storage in the web page

import createElement from "./misc-functions/createElement.js";
import { format } from date-fns

function addToMemory () {
    const currentDate = new Date();
    const formattedDate = format(currentDate, "MMMM dd, yyyy")
    console.log(formattedDate)

    
}