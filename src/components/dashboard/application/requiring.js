import { content, page } from "../../../resources/string";
import { images } from "../../../resources/image";
import Navigation from "../../common/navigationpart/navigation";
import { useState } from "react";

import {
  Main,
  H5,
  H2,
  Box,
  MainHeader,
  Number,
  SubBox,
  SecondPage,
  LabelContent,
  Page,
  Second,
  ButtonClear,
  SearchBox,
  SearchBar,
  ButtonTag,
  Input,
  SearchImg,
  SubCart,
  Status,
  Select,
  Date,
  Sub,
  BodyContent,
  First,
  Name,
  Content,
  Footer1,
  SubFooter,
  Action,
  Para,
  Ppo,
  DateContent,
  BoxTag,
  Imageset,
  HeadingTag,
  LinkContent,
} from "../application/applicationstyle";
import Footer from "../../common/footerpart/footer";
import CustomerDetails from "../../common/customerDetails/customerDetails";
export default function Requiring() {
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
            <LinkContent to="/Application">
              {" "}
              <H5> {content.applicationHeading}</H5>
            </LinkContent>
            <H5> {content.information}</H5>
            <LinkContent to="/Prospect">
              {" "}
              <H5> {content.prospect}</H5>
            </LinkContent>
          </Main>
          <Box>
            <MainHeader>
              <H2>{content.requireh}</H2>
            </MainHeader>

            <CustomerDetails />
          </Box>
        {page
          .filter((product) =>
            product.namecontent.toLowerCase().includes(text.toLowerCase())
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
                      <HeadingTag>{discription.namecontent}</HeadingTag>
                    </Content>
                    <Ppo>
                      <Para>{discription.account}</Para>
                      <Para>{discription.accountnum}</Para>
                    </Ppo>
                  </First>
                  <Second>
                    <DateContent>
                      <Para>{discription.last}</Para>
                      <Para>{discription.limit}</Para>
                    </DateContent>

                    <Action>
                      <Name src={images.response} />
                      <Para>{discription.respond}</Para>
                    </Action>

                    <Action>
                      <Name src={images.pdf} />
                      <Para>{discription.pdf}</Para>
                    </Action>
                  </Second>
                </BoxTag>
                {shown && <Last />}
              </>
            );
          })}
      </SecondPage>
      <Footer />
    </>
  );
}
function Last() {
  return (
    <Footer1>
      <SubFooter>
        <H5> {content.late}</H5>
        <Para>{content.need}</Para>
        <Para>{content.outreach}</Para>
        <Para>{content.leave}</Para>
        <Para>{content.member}</Para>
      </SubFooter>
    </Footer1>
  );
}
