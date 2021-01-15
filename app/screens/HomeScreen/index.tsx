import React from "react";
//Components
import ScreenContainer from "../../components/ScreenContainer";
import OrdersList from "../../components/OrdersList";
//Hooks
import useResetForm from "../../hooks/useResetForm";

export default () => {
  useResetForm();
  return (
    <ScreenContainer>
      <OrdersList />
    </ScreenContainer>
  );
};
