
import {
    WholeContent, Main, H5, H2, Box, MainHeader, SearchingDetails, SubBox, SearchClear, LabelContent, PageWrapper, Button, ButtonClear, SearchBox, SearchBar,
    ButtonTag, Input, SearchImg, Status, Select, Date, ClientDetails
    , Ppo, First, Name, Content, P, BoxTag, Imageset, DateContent, Register
    , Action, HeadingTag, Para, LinkContent, Paragraph, LabelTag, Option,PageInput,PageLabel
 } from '../../dashboard/application/applicationstyle'
 import { useState } from 'react';
 import { images } from '../../../resources/image'
const CustomerDetails =()=>{
    const [text, setText] = useState('');
    return(
        <>
        <SubBox>
                  <SearchingDetails>
                     <SearchBar>
                        <SearchBox bgcolor='red'>
                           <Input type="text" placeholder="search last name" onChange={(e) => setText(e.target.value)} />
                           <SearchImg src={images.search} />
                        </SearchBox>

                        <SearchBox>
                           <Input type="text" placeholder="search last name" onChange={(e) => setText(e.target.value)} />
                           <SearchImg src={images.search} />
                        </SearchBox>
                     </SearchBar>
                     <Status>
                        <LabelContent>
                           <LabelTag>Status</LabelTag>
                           <Select >
                              <Option>choose option</Option>
                              <Option>yes</Option>
                              <Option>no</Option>
                           </Select>
                        </LabelContent>
                        <LabelContent>
                           <LabelTag>Date</LabelTag>
                           <Date type="date" />
                        </LabelContent>
                     </Status>
                  </SearchingDetails>
                  
                  <ClientDetails>
                     <SearchClear>
                        <ButtonTag>
                           <Button>Search</Button>

                           <ButtonClear>Clear</ButtonClear>
                        </ButtonTag> 
                        <PageWrapper>
                           <PageLabel for='pageInput'>Page</PageLabel>
                          <PageInput type='text' name='pageInput'/> 
                        </PageWrapper>
                     </SearchClear>
                  </ClientDetails>

               </SubBox> </>
    )
}
         
export default CustomerDetails;
         