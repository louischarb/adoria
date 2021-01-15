import React, { useState, useEffect } from "react";
//Components
import { AntDesign } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import {
  Button,
  ButtonContainer,
  CameraStyle,
  Container,
  HasPermissionFalse,
  HasPermissionNull,
} from "./styles";
import ImagePickerWrapper from "../ImagePicker";
import * as ImagePicker from "expo-image-picker";
//Hooks
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
//Constants
import _colors from "../../constants/colors";
//Redux
import { addPicture } from "../../redux/form/actions";
//Types
import { IPicture } from "./types";

export default ({ onSnap }: { onSnap: (photo: string) => void }) => {
  let camera: Camera | null = null;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState<Object | null>(null);
  const [cameraReady, setCameraReady] = useState<Boolean>(false);

  useEffect((): void => {
    (async () => {
      const {
        status,
      }: { status: string } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <HasPermissionNull />;
  }
  if (hasPermission === false) {
    return <HasPermissionFalse>No access to camera</HasPermissionFalse>;
  }

  const handleSnap = async () => {
    if (camera && cameraReady) {
      let photo: IPicture = await camera.takePictureAsync();
      onSnap(photo.uri);
      navigation.goBack();
    }
  };

  const handlePickImage = async (): Promise<void> => {
    let result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync(
      {
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      }
    );
    if (!result.cancelled) {
      dispatch(addPicture(result.uri));
      navigation.goBack();
    }
  };

  return (
    <Container>
      <Camera
        style={CameraStyle}
        type={Camera.Constants.Type.back}
        ref={(ref: Camera) => {
          camera = ref;
        }}
        onCameraReady={(): void => {
          setCameraReady(true);
        }}
      >
        <ButtonContainer>
          <Button
            onPress={(): void => {
              navigation.goBack();
            }}
          >
            <AntDesign name="left" size={34} color={_colors.white} />
          </Button>
          <Button onPress={handleSnap}>
            <AntDesign name="camerao" size={60} color={_colors.white} />
          </Button>
          <ImagePickerWrapper onPress={handlePickImage}>
            <AntDesign name="picture" size={34} color={_colors.white} />
          </ImagePickerWrapper>
        </ButtonContainer>
      </Camera>
    </Container>
  );
};
