import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import propTypes from 'react-table-v6/lib/propTypes';
 
export default function Addcar(props) {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({brand:'', model: '', color:'', year:'', price:'', fuel:''})
 
  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    props.addCar(car);
    setCar({brand:'', model: '', color:'', year:'', price:'', fuel:''})
    setOpen(false);
  };

  const inputChanged = (event) =>{
      setCar({...car, [event.target.name]: event.target.value})
  }
  
  const handleCancel = () =>{
      setOpen(false);
  }
  return(
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Car 
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new car</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Brand"
            name="brand"
            value={car.brand}
            onChange={(e) => inputChanged(e)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="price"
            name="price"
            value={car.price}
            onChange={(e) => inputChanged(e)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Fuel"
            name="fuel"
            value={car.fuel}
            onChange={(e) => inputChanged(e)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Model"
            name="model"
            value={car.model}
            onChange={(e) => inputChanged(e)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Year"
            name="year"
            value={car.year}
            onChange={(e) => inputChanged(e)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Color"
            name="color"
            value={car.color}
            onChange={(e) => inputChanged(e)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>    
    </div>
  );
}