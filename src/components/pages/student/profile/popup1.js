import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

export default function Popup(props){
    const [title,student,openPopup,setOpenPopup]=props;
    return(
        <Dialog open={openPopup}>
            <DialogTitle>
            <div>Edit Personal Details</div>
            </DialogTitle>
            <DialogContent>
            <div>Content goes here</div>
            </DialogContent>
        </Dialog>
    )
}