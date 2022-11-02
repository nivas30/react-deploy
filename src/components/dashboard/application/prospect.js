import { content, prospectpage } from "../../../resources/string"
import { images } from "../../../resources/image"
import Navigation from "../../common/navigationpart/navigation"
import { useState } from "react"
import { useEffect } from "react"

import {
    WholeContent, Main, H5, H2, Box, MainHeader, Number, SubBox, SecondPage, Second, Page, Button,
    ButtonClear, SearchBox, SearchBar, ButtonTag, InputText, SearchImg, SubCart, Status, Select, Date, Sub, BodyContent,
    First, Name, Content, Footer1, SubFooter, Action, Para, Ppo, SearchBox1, SearchBar1, Profile, DateContent, BoxTag, Imageset, HeadingTag, BoxTag1, LinkContent
} from "../application/applicationstyle"

import { Whole, FirstContent, Img, SecondContent, ParaContent, LastContent, Buttoncontent, H5Content } from "./prospectpopupstyle";
import Footer from "../../common/footerpart/footer";

import { Prospects, Inputs, InputBox, SearchInput, Buttons, PageCount, Pages, Numbers, ProspectButton } from './prospectstyle'
import CustomerDetails from "../../common/customerDetails/customerDetails"

export default function Prospect() {

    const [shown, isShown] = useState(false);
    const [details, isDetails] = useState('');

    console.log(details);

    useEffect(() => {
        isDetails(prospectpage)

    });


    const handleClick = event => {
        isShown(current => !current);
        // isShown(false);


    }
    const [text, setText] = useState('');

    let num;
    const [modal, setModal] = useState(false);
    const toggleModal = (i) => {
        num = i
        setModal(!modal);
    };

    let deleteDetails = details
    console.log(deleteDetails);
    const Delete = () => {
        deleteDetails.splice(num, 1);
        isDetails([...deleteDetails]);
        setModal(!modal);
    }
    return (
        <>
            <Navigation />
            <SecondPage>
                <WholeContent>
                    <Main>
                        <LinkContent to='/Application'>   <H5> {content.applicationHeading}</H5></LinkContent>
                        <LinkContent to='/Requiring'> <H5>  {content.information}</H5> </LinkContent>
                        <H5> {content.prospect}</H5>
                    </Main>
                    <Box>
                        <MainHeader>
                            <h1>Prospects</h1>
                        </MainHeader>
                        <CustomerDetails />
                    </Box>
                </WholeContent>

                {prospectpage.filter(product =>
                    product.name.toLowerCase().includes(text.toLowerCase()),
                ).map((discription, i) => {
                    return (
                        <>
                            <BoxTag>
                                <First>
                                    <Imageset >
                                        <Name onClick={handleClick} src={images.down} />
                                    </Imageset>
                                    <Content>
                                        <HeadingTag>{discription.name}</HeadingTag>
                                    </Content>
                                    <Ppo>
                                        <Para>{discription.dob}</Para>
                                        <Para>{discription.dateofbirth}</Para>
                                    </Ppo>
                                    <DateContent>
                                        <Para>{discription.zip}</Para>
                                        <Para>{discription.zipcode}</Para>
                                    </DateContent>
                                </First>

                                <Second>
                                    <Action>
                                        <Name src={images.writing} />
                                        <Para>{discription.create}</Para>
                                    </Action>
                                    <Action>
                                        <Name src={images.glass} />
                                        <Para>{discription.verify}</Para>
                                    </Action>
                                    <Action >
                                        <Name onClick={() => {
                                            toggleModal(i);
                                        }} src={images.remove} />
                                        <Para>{discription.remove}</Para>
                                        {modal && (
                                            <Whole>
                                                <FirstContent>
                                                    <H5Content> {content.popup} </H5Content>
                                                    <Img onClick={toggleModal} src={images.wrong} />
                                                </FirstContent>
                                                <SecondContent>
                                                    <ParaContent>{content.removecontent}</ParaContent>
                                                    <ParaContent>{content.removename}</ParaContent>
                                                </SecondContent>
                                                <LastContent>
                                                    <Buttoncontent onClick={toggleModal}>Cancel</Buttoncontent>
                                                    <Buttoncontent onClick={() => { Delete(num) }}>Ok</Buttoncontent>
                                                </LastContent>
                                            </Whole>
                                        )}
                                    </Action>
                                </Second>
                            </BoxTag>
                            {
                                shown && <Last />}

                        </>

                    )

                })}
            </SecondPage>
            <Footer />
        </>
    )




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
    )

}
