'use server'


 /*
 This is for Theory folder 

 export const fetchListOfProducts=async()=>{
    const res=await fetch('https://dummyjson.com/products');
    const data=await res.json();
    return data?.products;
}

*/


//Actions Required in this Project

import connectMongo from "@/database"
import { NextResponse } from "next/server";
import Joi from "joi";
import User from "@/models/User";
import { revalidatePath } from "next/cache";


// 1.   add new user action

const validateAddNewUser=Joi.object({
    fName:Joi.string().required(),
    lName:Joi.string().required(),
    email:Joi.string().email().required().messages({
        "string.empty": "Email is required.",
        "string.email": "Please enter a valid email address.",    
    }),
    address:Joi.string().required(),
})


export const addNewUserAction=async(formData, pathToRevalidate)=>{
    await connectMongo();
    try{
    //we can validate the data using JOI
    const { error } = validateAddNewUser.validate(formData);
    if (error) {
        return ({
            success: false,
            message: `Validation Error: ${error.details[0].message}`,
        });
    }
        const result=await User.create(formData);
        if(result){
            revalidatePath(pathToRevalidate); //otherwise the page will display data from cache and new data will not displayed
            return{
                success:true,
                message:"User Added Successfully"
            }
        }else{
            return{
                success:false,
                message:"Error While Inserting Data in Add New user Action"
            }
        }

    }catch(error){
        console.log(error.message);
        return {
            success:false,
            message:" Some Error Occured! Please Try again"
        }
    }
}


//2. fetch user action

export async function fetchUsersAction() {
    await connectMongo();
    try {
      const listOfUsers = await User.find({});
      if (listOfUsers) {
        return {
          success: true,
          data: JSON.parse(JSON.stringify(listOfUsers))
        };
      } else {
        return {
          success: false,
          message: "Some error occured! Please try again",
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Some error occured! Please try again",
      };
    }
  }
//3.edit a user action



export async function updateUserAction(id,formData,pathToRevalidate) {
    await connectMongo();
    console.log(id);
    try {
      const user = await User.findByIdAndUpdate(id,formData,{new:true});
        console.log(user);
      if (user) {
        revalidatePath(pathToRevalidate);
        return {
          success: true,
          message: "User Updated Successfully",
          data: JSON.parse(JSON.stringify(user))
        };

      } else {
        return {
          success: false,
          message: "Some Error occured in finding ID ! Please try again",
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Some error occured during Editing user Action  ! Please try again",
      };
    }
  }




//4.delete a user action



export async function deleteUsersAction(id,pathToRevalidate) {
    await connectMongo();
    console.log(id);
    try {
      const user = await User.findByIdAndDelete(id);
        console.log(user);
      if (user) {
        revalidatePath(pathToRevalidate);
        return {
          success: true,
          data: JSON.parse(JSON.stringify(user))
        };

      } else {
        return {
          success: false,
          message: "Some Error occured in finding ID ! Please try again",
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Some error occured during deleting user Action  ! Please try again",
      };
    }
  }

