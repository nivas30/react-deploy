import { content, details } from "../../../resources/string";
import { images } from "../../../resources/image";
import { useState } from "react";
import Navigation from "../../common/navigationpart/navigation";
import DownArrow from "../application/downarrow";
import Footer from "../../common/footerpart/footer";
import {
  WholeContent,
  Main,
  H5,
  H2,
  Box,
  MainHeader,
  Ppo,
  First,
  Name,
  Content,
  P,
  BoxTag,
  Imageset,
  DateContent,
  Register,
  Action,
  HeadingTag,
  Para,
  LinkContent,
  Second,
  SecondPage,
} from "../application/applicationstyle";

import CustomerDetails from "../../common/customerDetails/customerDetails";
export default function Application() {
  const [shown, isShown] = useState(false);
  const handleClick = (event) => {
    isShown((current) => !current);
  };
  const [text, setText] = useState("");
  return (
    <>
      <Navigation />
      <SecondPage className="second page">
        <Main>
          <H5> {content.applicationHeading}</H5>
          <LinkContent to="/Requiring">
            {" "}
            <H5> {content.information}</H5>{" "}
          </LinkContent>
          <LinkContent to="/Prospect">
            {" "}
            <H5> {content.prospect}</H5>
          </LinkContent>
        </Main>
        <Box>
          <MainHeader>
            <H2>{content.manage}</H2>
          </MainHeader>
          <CustomerDetails />
        </Box>
      </SecondPage>

      {details
        .filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        )
        .map((discription) => {
          return (
            <>
              <BoxTag>
                <First>
                  <Imageset>
                    <Name onClick={handleClick} src={images.down} />
                  </Imageset>
                  <Content>
                    <HeadingTag>{discription.name}</HeadingTag>
                  </Content>
                  <Ppo>
                    <Para>{discription.access}</Para>
                    <Para>{discription.core}</Para>
                  </Ppo>
                </First>
                <Second>
                  <DateContent>
                    <Para>{discription.date}</Para>
                    <Para>{discription.request}</Para>
                  </DateContent>

                  <Register>
                    <Para>{discription.num}</Para>
                    <Para>{discription.no}</Para>
                  </Register>

                  <Action>
                    <Name src={images.action} />
                    <Para>{discription.action}</Para>
                  </Action>
                </Second>
              </BoxTag>
              {shown && <DownArrow />}
            </>
          );
        })}
      <>
        <Footer />
      </>
    </>
  );
}
