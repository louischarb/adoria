import React from "react";
import Header from "../components/Header";

const withHeader = (Component: React.ComponentType): React.ComponentType => {
  return class withHeader extends React.Component {
    render() {
      return (
        <>
          <Header back />
          <Component />
        </>
      );
    }
  };
};

export default withHeader;
