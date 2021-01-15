import React from "react";
//Components
import Camera from "../../components/Camera";
import { Container } from "./styles";
//Hooks
import { useRoute, RouteProp } from "@react-navigation/native";

type ParamList = {
  onSnap: (photo: string) => void;
};

export default () => {
  const route = useRoute<RouteProp<ParamList, "onSnap">>();
  const params = route.params as ParamList;
  return (
    <Container>
      <Camera onSnap={params.onSnap} />
    </Container>
  );
};
