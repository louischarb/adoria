//Redux
import { resetPicture, resetDeliveryForm } from "../redux/form/actions";
//Hooks
import { useDispatch } from "react-redux";

export default (): void => {
  const dispatch = useDispatch();
  dispatch(resetPicture());
  dispatch(resetDeliveryForm());
};
