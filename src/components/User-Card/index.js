'use client'

import React from 'react'
import { Button } from '../ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


import { deleteUsersAction } from '@/actions';
import { useAppContext } from '@/context/ContextProvider';

  
const UserCard = ({user}) => {
    const { fName, lName, email, address } = user; 
const {setOpenPopUp,setEditID,setNewUserData}=useAppContext();

    const handleDelete=async (id)=>{
        console.log('delete button clicked')
      await deleteUsersAction(id,"/user-management");
    }
    const handleEdit=async(user)=>{
        console.log("Edit handling");
        setOpenPopUp(true);
        setNewUserData({
            fName:user.fName,
            lName:user.lName,
            email:user.email,
            address:user.address
        })
        setEditID(user._id);
    }

  return (
    <div className=' mb-3 '>
    
      <Card>
  <CardHeader>

    <CardTitle> {fName} {lName}</CardTitle>
    <CardDescription>{email}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{address}</p>
  </CardContent>
  <CardFooter className='flex justify-between'>
    <Button onClick={()=>handleEdit(user)}>Edit</Button>
    <Button onClick={()=>{handleDelete(user?._id)}}>Delete</Button>
    {/* ()=>handleDelete() */} 
  </CardFooter>
</Card>

    </div>
  )
}

export default UserCard
