import React from "react";
//Components
import ScreenContainer from "../../components/ScreenContainer";
import AddDisputeButton from "../../components/AddDisputeButton";
import DisputesList from "../../components/DiputesList";
//Hooks
import useResetForm from "../../hooks/useResetForm";

export default () => {
  useResetForm();
  return (
    <ScreenContainer>
      <AddDisputeButton />
      <DisputesList />
    </ScreenContainer>
  );
};
