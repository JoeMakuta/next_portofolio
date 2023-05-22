import { ReactElement } from "react";


export interface IsocialMediaProps {
   label : string,
   icon : ReactElement,
   link : string
}

export interface IprojectProps {
   title: string,
    description: string,
    images: string[],
    githubLink: string,
    liveLink: string,
}

export interface IaboutDetailsProps{ 
   name: string, 
   description: string,
 }

 export interface ImenuDataProps{ 
   name: string, 
   link: string,
 }