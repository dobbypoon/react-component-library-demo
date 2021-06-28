import { useState } from "react";

import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		top: "10%",
		left: "10%",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function MyLModal(props) {
	const classes = useStyles();

	return (
		<Modal {...props}>
			<div className={classes.paper}>
				<h2 id="simple-modal-title">Text in a modal</h2>
				<p id="simple-modal-description">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
			</div>
		</Modal>
	);
}

function MyDialog(props) {
	return (
		<Dialog {...props} aria-labelledby="material-ui-dialog-title" aria-describedby="material-ui-dialog-description">
			<DialogTitle id="material-ui-dialog-title">{"Modal heading"}</DialogTitle>
			<DialogContent>
				<DialogContentText id="material-ui-dialog-description">
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
					eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </DialogContentText>
			</DialogContent>
            <DialogActions>
                <Button onClick={props.onHide} color="primary">Close</Button>
            </DialogActions>
		</Dialog>
	);
}

function MaterialUiModal() {
	const [lModalOpen, setlModalOpen] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<div className="comparison-item-container">
			<div>MaterialUi</div>
			<div className="comparison-row">
				<Button variant="contained" onClick={() => setlModalOpen(true)}>
					Open Modal
				</Button>
				<MyLModal open={lModalOpen} onHide={() => setlModalOpen(false)} />
			</div>

			<div className="comparison-row">
				<Button variant="outlined" color="primary" onClick={() => setDialogOpen(true)}>
					Open Dialog
				</Button>
				<MyDialog open={dialogOpen} onHide={() => setDialogOpen(false)} />
			</div>
		</div>
	);
}

export default MaterialUiModal;
