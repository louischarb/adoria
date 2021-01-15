import React from "react";
//Components
import { Image } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { Container, DateText, Text, DocumentContainer } from "./styles";
import moment from "moment";
//Hooks
import { useRoute } from "@react-navigation/native";
import useResetForm from "../../hooks/useResetForm";
//Func
import { pathOr } from "ramda";
//Type
import { Dispute } from "../../types/dispute";

export default () => {
  useResetForm();
  const route = useRoute();
  const dispute: Dispute = pathOr({}, ["params", "dispute"], route) as Dispute;
  return (
    <Card>
      <Card.Title>{dispute.name}</Card.Title>
      <Card.Divider />
      <Container>
        <ListItem>
          <DateText>
            {`Date de signalement : ${moment(new Date(dispute.date)).format(
              "DD/MM/YYYY"
            )}`}
          </DateText>
        </ListItem>
        <ListItem>
          <Text>{dispute.description}</Text>
        </ListItem>
        <ListItem>
          <Text>{`Fournisseur : ${dispute.provider}`}</Text>
        </ListItem>
        <ListItem>
          <Text>{`Commande : ${pathOr(
            null,
            ["order", "label"],
            dispute
          )}`}</Text>
        </ListItem>
        <DocumentContainer>
          <Image
            source={{ uri: dispute.picture }}
            style={{
              width: 150,
              height: 150,
            }}
          />
          <Image
            source={{ uri: dispute.deliveryForm }}
            style={{
              width: 150,
              height: 150,
            }}
          />
        </DocumentContainer>
      </Container>
    </Card>
  );
};
