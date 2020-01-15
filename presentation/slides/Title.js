import React from "react";
import {
  themeColors,
  H1Norm,
  H1Col1,
  H2,
  FlexRowCenter,
  ListItemIndent
} from "../helpers";
import "../styles.css";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Link
} from "spectacle";

const images = {
  sai: require("../../assets/sai.png").default,
  dsmjs: require("../../assets/dsmjs.png").default,
  twitter: require("../../assets/twitter.png").default
};

export const Title = () => (
  <Slide transition={["zoom"]} bgColor="dark">
    <H1Norm>
      <a
        href="https://www.cypress.io/"
        style={{ textDecoration: "none", color: "#fded07" }}
      >
        Cypress
      </a>{" "}
      for E2E Testing:
    </H1Norm>
    <Heading size={3} lineHeight={1.1} textColor="text">
      A Retrospective
    </Heading>
    <br />
    <br />
    <Heading size={4} caps lineHeight={1} textColor="lightText">
      The Hedgehogs
    </Heading>
    <Text lineHeight={1.1} textColor="lightText">
      DL-TheHedgeHogs@corteva.com
    </Text>
    <br />
    <FlexRowCenter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginRight: "40px"
        }}
      >
        <Heading size={4} caps lineHeight={1} textColor="lightText">
          Dan Rocha
        </Heading>
        <Text lineHeight={1.1} textColor="lightText">
          <div>dan.rocha@corteva.com</div>
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginLeft: "40px"
        }}
      >
        <Heading size={4} caps lineHeight={1} textColor="lightText">
          Michael Leners
        </Heading>
        <Text lineHeight={1.1} textColor="lightText">
          <div
          // style={{
          //   display: "flex",
          //   flexDirection: "row",
          //   justifyContent: "flex-end"
          // }}
          >
            michael.leners@corteva.com
          </div>
        </Text>
      </div>
    </FlexRowCenter>
    <br />
    <br />
    <br />
    <Heading size={5} caps lineHeight={1} textColor="text">
      January 16, 2020
    </Heading>
  </Slide>
);
