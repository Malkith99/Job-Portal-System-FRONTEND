import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button color="secondary" onClick={() => setOpenPopup(false)}>
            <CloseIcon
              style={{
                backgroundColor: "red",
                borderRadius: "1%",
                padding: "4px",
                width: "24px",
                height: "24px",
                color: "white",
              }}
            />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
