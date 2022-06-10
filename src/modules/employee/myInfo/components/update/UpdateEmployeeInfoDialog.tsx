import { ArrowBack } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  makeStyles,
  Slide,
  SlideProps,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";
import { useAppSelector } from "../../../../../hooks/reduxHooks";
import AddEmployeeForm from "./UpdateEmployeeInfoForm";

// animation
const Transition = forwardRef(function Transition(props: SlideProps, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export interface Props {
  open: boolean;
  handleCloseDialog: (e: React.SyntheticEvent) => void;
}

const UpdateInfoSideDialog = ({ open, handleCloseDialog }: Props) => {
  // const dispatch = useDispatch();

  const { employeeSelectedId } = useAppSelector((state) => state.employees);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseDialog}
      sx={{
        "&>div:nth-child(3)": {
          justifyContent: "flex-end",
          "&>div": {
            margin: "0px",
            borderRadius: "0px",
            maxWidth: "500px",
            height: "100vh",
            maxHeight: "100vh",
            "&>div.MuiDialogContent-root>div.scrollbar-container": {
              paddingLeft: "20px",
              overflow: "hidden",
            },
          },
        },
      }}
    >
      <DialogTitle>
        <Grid item container alignItems="center" gap={1}>
          <IconButton onClick={handleCloseDialog}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h5">Update information</Typography>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <AddEmployeeForm />
      </DialogContent>
      <DialogActions>
        {/* <AnimateButton>
            <Button variant="contained" color="primary">
              Create
            </Button>
          </AnimateButton>
          <Button variant="text" onClick={handleCloseDialog} color="primary">
            Close
          </Button> */}
      </DialogActions>
    </Dialog>
  );
};

export default UpdateInfoSideDialog;
