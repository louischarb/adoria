import React, { useEffect, useState } from "react";
//Components
import { Platform } from "react-native";
import { ListItem, Button, Card } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import ModalSelector from "react-native-modal-selector";
import moment from "moment";
import {
  datePickerStyle,
  submitButtonContainerStyle,
  submitButtonStyle,
  providerTextStyle,
  inputStype,
} from "./styles";
import InputWrapper from "./InputWrapper";
//Hooks
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
//Redux
import { selectPicture, selectDeliveryForm } from "../../redux/form/selectors";
import { addDispute } from "../../redux/disputes/actions";
import { addDeliveryForm, addPicture } from "../../redux/form/actions";
//Constants
import _colors from "../../constants/colors";
import _screens from "../../constants/screens";
//Types
import { Provider } from "../../types/provider";
import { Dispute } from "../../types/dispute";
import { Order } from "../../types/order";
//Func
import { checkForm } from "./func";
//Faked Datas
import { providers } from "../../faked/providers";
import { orders } from "../../faked/orders";

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const picture = useSelector(selectPicture);
  const deliveryForm = useSelector(selectDeliveryForm);
  const [name, setName] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [date, setDate] = useState<string>(new Date().toString());
  const [provider, setProvider] = useState<string>(providers[0].label);
  const [order, setOrder] = useState<Order>(orders[0]);
  const [datePickerIsVisible, setDatePickerIsVisible] = useState<boolean>(
    false
  );
  const [isValid, setIsValid] = useState<Boolean>(false);

  const dispute: Dispute = {
    picture,
    name,
    description,
    date,
    provider,
    order,
    deliveryForm,
  };

  useEffect(() => {
    setIsValid(checkForm(dispute));
  });

  const handleAddPicture = (photo: string): void => {
    dispatch(addPicture(photo));
  };

  const handleAddDeliveryForm = (photo: string): void => {
    dispatch(addDeliveryForm(photo));
  };

  return (
    <Card>
      <Card.Title>Déclarer un litige</Card.Title>
      <InputWrapper title="Nom" icon="warning" value={name} input="text">
        <ListItem.Input
          textAlign="left"
          onChangeText={(e: string): void => {
            setName(e);
          }}
          style={inputStype}
        />
      </InputWrapper>
      <InputWrapper
        title="Description"
        icon="filetext1"
        value={description}
        input="text"
      >
        <ListItem.Input
          textAlign="left"
          onChangeText={(e: string): void => {
            setDescription(e);
          }}
          style={inputStype}
        />
      </InputWrapper>
      <InputWrapper
        title="Date"
        icon="calendar"
        value={description}
        input="date"
      >
        {Platform.OS !== "ios" && (
          <Button
            title={moment(new Date(date)).format("DD/MM/YYYY")}
            onPress={(): void => {
              setDatePickerIsVisible(!datePickerIsVisible);
            }}
            type="outline"
            titleStyle={{ color: _colors.black, fontWeight: "normal" }}
            buttonStyle={{ borderColor: _colors.grey }}
          />
        )}

        {(datePickerIsVisible || Platform.OS === "ios") && (
          <DateTimePicker
            value={new Date(date)}
            mode="date"
            display={Platform.OS === "ios" ? "compact" : "calendar"}
            style={datePickerStyle}
            onChange={(e, selectDate): void => {
              if (Platform.OS !== "ios") setDatePickerIsVisible(false);
              if (selectDate) setDate(new Date(selectDate).toString());
            }}
          />
        )}
      </InputWrapper>
      <InputWrapper
        title="Fournisseur"
        icon="team"
        value={provider}
        input="select"
      >
        <ModalSelector
          data={providers}
          initValue={provider}
          onChange={(option: Provider): void => {
            setProvider(option.label);
          }}
          optionTextStyle={providerTextStyle}
          initValueTextStyle={providerTextStyle}
        />
      </InputWrapper>
      <InputWrapper
        title="Commande"
        icon="shoppingcart"
        value={order.label}
        input="select"
      >
        <ModalSelector
          data={orders}
          initValue={order.label}
          onChange={(option: Order): void => {
            setOrder(option);
          }}
          optionTextStyle={providerTextStyle}
          initValueTextStyle={providerTextStyle}
        />
      </InputWrapper>
      <InputWrapper
        title="Photo"
        icon={"camerao"}
        value={picture}
        input="camera"
        onPress={() => {
          navigation.navigate(_screens.CAMERA, {
            onSnap: handleAddPicture,
          });
        }}
      >
        <ListItem.Content></ListItem.Content>
        <ListItem.Chevron />
      </InputWrapper>
      <InputWrapper
        title="Bon de livraison"
        icon={"file1"}
        value={deliveryForm}
        input="camera"
        onPress={() => {
          navigation.navigate(_screens.CAMERA, {
            onSnap: handleAddDeliveryForm,
          });
        }}
      >
        <ListItem.Content></ListItem.Content>
        <ListItem.Chevron />
      </InputWrapper>
      <Button
        title="Valider"
        containerStyle={submitButtonContainerStyle}
        buttonStyle={submitButtonStyle}
        disabled={!isValid}
        onPress={() => {
          dispatch(addDispute(dispute));
          navigation.goBack();
        }}
      />
    </Card>
  );
};
