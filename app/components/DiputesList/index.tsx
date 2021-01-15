import React from "react";
//Components
import { Card } from "react-native-elements";
import { DisputeListEmptyText } from "./styles";
import DisputeItem from "../DisputeItem";
//Hooks
import { useSelector } from "react-redux";
//Redux
import { selectDisputes } from "../../redux/disputes/selectors";
//Types
import { Dispute } from "../../types/dispute";

export default () => {
  const disputes: Array<Dispute> = useSelector(selectDisputes);
  return (
    <Card>
      <Card.Title>Mes litiges</Card.Title>
      {disputes.length !== 0 ? (
        <>
          {disputes.map((dispute: Dispute, i) => {
            return <DisputeItem key={i} dispute={dispute} />;
          })}
        </>
      ) : (
        <DisputeListEmptyText>Vous n'avez pas de litiges.</DisputeListEmptyText>
      )}
    </Card>
  );
};
