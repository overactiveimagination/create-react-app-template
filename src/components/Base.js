import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { navigate } from "@reach/router";

import { AppContext } from "../context/App";

const Container = styled.header``;

const Base = props => {
  const { state } = useContext(AppContext);
  const {
    auth: { token }
  } = state;
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  return (
    <Container id="header" className="header">
      <div className="container">{props.children}</div>
    </Container>
  );
};

Base.propTypes = {
  children: PropTypes.any
};

export default Base;
