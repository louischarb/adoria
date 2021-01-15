import styled from "styled-components/native";
import _colors from "../../constants/colors";

export const Container: React.ComponentType = styled.View`
  width: 100%;
  height: 100%;
`;
export const CameraStyle: object = {
  width: "100%",
  height: "100%",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-end",
  padding: 35,
};

export const ButtonContainer: React.ComponentType = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Button: React.ComponentType = styled.TouchableOpacity`
  width: 60px;
  justify-content: center;
  align-items: center;
`;

export const HasPermissionNull: React.ComponentType = styled.View``;
export const HasPermissionFalse: React.ComponentType = styled.Text``;
