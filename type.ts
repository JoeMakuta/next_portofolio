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

 export interface IapiResponseProps {
   
   jobs : {
      applicationLink:string,
      categories:  Array<string>,
      companyLogo:string,
      companyName :string,
      description : string,
      excerpt : string,
      expiryDate: number,
      guid: string,
      image : string,
      locationRestrictions:string[],
      parentCategories:string[],
      pubDate : number,
      timezoneRestrictions : number[],
      title:string,
   }[],

   limit : number,
   offset : number,
   total_count : number,
   updated_at : number
 }