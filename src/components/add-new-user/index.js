"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { addNewUserFormControls, addNewUserInitialState } from "@/utils";
import { useState } from "react";
import { addNewUserAction,updateUserAction } from "@/actions";
import { useAppContext } from "@/context/ContextProvider";

const AddNewUser = () => {
  const{openPopUp,setOpenPopUp}=useAppContext();
  const {newUserData, setNewUserData,editID,setEditID} = useAppContext();
  console.log(newUserData);
  const validateSaveBtn=()=>{
    return Object.keys(newUserData).every((key)=>newUserData[key].trim()!=="");
  }

  const handleSave=async()=>{

       if(editID==null)
            await addNewUserAction(newUserData,"/user-management");
       else await updateUserAction(editID,newUserData,'/user-management');
       
    setOpenPopUp(false);
    setNewUserData(addNewUserInitialState);
    setEditID(null);
    
  }
  return (
    <div>
      <Button onClick={()=>setOpenPopUp(true)}>Add New User</Button>

      <Dialog open={openPopUp} onOpenChange={()=>{
        setOpenPopUp(!openPopUp);
        setNewUserData(addNewUserInitialState);
        setEditID(null);
      }}>
       
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader> 
            <DialogTitle>{editID==null?"Add":"Edit"} New User </DialogTitle>
            <DialogDescription>
              {/* Make changes to your profile here. Click save when you're done. */}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="">
              <form action={handleSave} >
              {addNewUserFormControls.map((controlItem, index) => (
                <div className="mb-5" key={controlItem.name}>
                  <Label
                    htmlFor={controlItem.name}
                    className="text-right"
                    key={controlItem.name}
                  >
                    {controlItem.label}
                  </Label>
                  <Input
                    id={controlItem.name}
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    type={controlItem.type}
                    className="col-span-3"
                    value={newUserData[controlItem.name]}
                    onChange={(e) =>
                      setNewUserData({
                        ...newUserData,
                        [controlItem.name]: e.target.value,
                      })
                    }
                  />
                </div>
              ))}
                  <DialogFooter>
            <Button className='disabled:opacity-60' disabled={!validateSaveBtn()} type="submit">Save</Button>
          </DialogFooter>
              </form>
            </div>
          </div>
      
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewUser;
