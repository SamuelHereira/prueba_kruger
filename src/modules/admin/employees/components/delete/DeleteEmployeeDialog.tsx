import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks";
import { useDeleteEmployeeMutation } from "../../slices/employeesApiSlice";

interface DeleteVehicleDialogProps {
  open: boolean;
  handleCloseDialog: (e: React.SyntheticEvent) => void;
}

const DeleteVehicleDialog = ({
  open,
  handleCloseDialog,
}: DeleteVehicleDialogProps) => {
  const dispatch = useAppDispatch();
  const [deleteEmployee, { isLoading, isSuccess, isError }] =
    useDeleteEmployeeMutation();

  const { employeeToDeleteId } = useAppSelector((state) => state.employees);

  const handleDeleteEmployee = async () => {
    await deleteEmployee({
      employee_id: employeeToDeleteId!,
    });
  };

  const successMessage = (
    <>
      <DialogTitle>Employee deleted</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Employee has been deleted successfully
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Close</Button>
      </DialogActions>
    </>
  );

  const errorMessage = (
    <>
      <DialogTitle>Error deleting employee</DialogTitle>
      <DialogContent>
        <DialogContentText>
          There was an error deleting the employee.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Close</Button>
      </DialogActions>
    </>
  );

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      {isSuccess ? (
        <>{successMessage}</>
      ) : isError ? (
        <>{errorMessage}</>
      ) : (
        <>
          <DialogTitle>Delete Employee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this employee?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleDeleteEmployee}
              disabled={isLoading}
              endIcon={isLoading && <CircularProgress size={20} />}
              color="primary"
            >
              Yes
            </Button>
            <Button
              onClick={handleCloseDialog}
              disabled={isLoading}
              endIcon={isLoading && <CircularProgress size={12} />}
              color="primary"
            >
              No
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default DeleteVehicleDialog;
