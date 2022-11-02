import styled from "styled-components";
import { Link } from "react-router-dom";
export const SecondPage = styled.div`
  padding: 20px;
`;
export const LinkContent = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const WholeContent = styled.div``;

export const Main = styled.div`
  /* position: relative; */
  display: flex;
  /* top:50px; */
  /* margin: 0 auto; */
  /* padding: 30px; */
  gap: 2rem;
`;

export const H5 = styled.h5``;
export const Profile = styled.img``;

export const H2 = styled.h1``;

export const Box = styled.div`
  border: 2px solid white;
  box-shadow: 1px 1px 1px 1px grey;
  padding: 15px;
  width: 98%;
  margin: 0 auto;
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;
export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding:20px; */
`;

export const First = styled.div`
width:50%;
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width: 425px) {
    width:100%

`;

export const Name = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
export const Content = styled.div`
  /* width: 15%; */
  /* margin: 0; */
  font-size: 15px;
`;
export const P = styled.div``;
export const BoxTag = styled.div`

border: 3px solid white;
box-shadow: 1px 1px 1px 1px gray;
margin: 1rem;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 768px) {
    font-size: 12px;
/* grid-template-columns: 146px 207px 148px 89px 101px; */
}
@media (max-width: 425px) {
    flex-direction:column;
    gap:1rem;
`;
export const Second = styled.div`
width:45%;
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width: 425px) {
    width:100%;
`;
export const Imageset = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Ppo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width:20% */
`;
export const DateContent = styled.div`
  /* margin: 0; */
`;

export const Register = styled.div`
  /* margin:0; */
`;
export const Action = styled.div`
  /* margin: 0; */
`;
export const HeadingTag = styled.h4`
  margin: 0;
`;

export const Para = styled.p`
  margin: 0;
`;

export const Footer1 = styled.div`
  background-color: blue;
  padding: 30px 28px 28px 30px;

  /* background-color: white; */
`;
export const SubFooter = styled.div`
  background-color: white;
  padding: 20px 40px;
  border-radius: 1rem;
  /* padding: 20px 40px; */
  /* padding: 100px; */
`;

export const BoxTag1 = styled.div`
  /* display: flex;
flex-direction: row; */
  border: 3px solid white;
  box-shadow: 1px 1px 1px 1px gray;
  margin: 1rem;
  padding: 20px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    /* grid-template-columns: 125px 133px 76px 134px 143px 78px ; */
    font-size: 12px;
  }
`;
export const InputText = styled.input`
  border: none;
  padding-bottom: 4px;
  width: 100px;
`;
export const SearchBar1 = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SearchBox1 = styled.div``;
export const SubBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin: 0 auto; */
  /* height: 10px; */
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SearchBox = styled.div`
  border: 1px solid black;

  background-color: white;

  border-radius: 10px;
  padding: 3px;
  width: 45%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 48%;
    /* padding: 3px; */
  }
  @media (max-width: 425px) {
    width: 90%;
    /* padding: 3px; */
  }
`;

export const Input = styled.input`
  border: none;
  padding: 10px;
  /* padding-bottom:4px; */
  @media (max-width: 768px) {
    width: 70%;
    font-size: 10px;
  }
  @media (max-width: 425px) {
    width: 90%;
    font-size: 10px;
  }
`;
export const SearchingDetails = styled.div``;
export const ClientDetails = styled.div``;
export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 30%; */
  /* gap:2rem; */
  @media (max-width: 768px) {
    width: 100%;
    gap: 1rem;
  }
  @media (max-width: 425px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ButtonTag = styled.div`
  display: flex;
  gap: 1rem;
  /* margin:25px; */
  padding: 4% 2%;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
export const Button = styled.button`
  background-color: blue;
  border-radius: 10px;
  /* width:25%; */
  padding: 7px;
  color: white;
  width: 37%;
  border: none;
  &:hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 768px) {
    /* padding: 1rem; */
    width: 80%;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
`;
export const Date = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  /* width:100%; */
  padding: 10px;
  @media (max-width: 768px) {
  }
`;
export const SearchImg = styled.img`
  padding: 10px @media (max-width: 768px) {
    width: 10px;
  }
  @media (max-width: 425px) {
    width: 20px;
  }
`;
export const PageLabel = styled.label`
  padding: 10px;
`;
export const PageInput = styled.input``;

export const Status = styled.div`
  display: flex;
  justify-content: space-between;

  /* align-items: center; */
  /* align-items: center; */
  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 12px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    width: 93%;
  }
`;
export const LabelContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
  padding: 10px 0px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 5px 0px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Select = styled.select`
  /* border: 1px solid black;
 */
  padding: 10px;
  /* width: 50%; */
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const LabelTag = styled.label`
font-size:20px;
@media (max-width: 768px) {
    font-size:15px;

`;
export const Option = styled.option`
  font-size: 10px;
`;

export const SearchClear = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
    padding: 10px;
  }
`;
export const PageWrapper = styled.div``;
export const SubCart = styled.div`
  width: 55%;
  margin-top: 18px;
  @media (max-width: 768px) {
    width: 49%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Sub = styled.div`
  width: 45%;
  /* padding: 1rem; */
  @media (max-width: 768px) {
    width: 49%;
  }
`;

export const ButtonClear = styled.button`
  background-color: white;
  /* width:25%; */
  border-radius: 10px;
  width: 37%;
  border: none;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

export const Number = styled.input`
  width: 50px;
`;
export const Page = styled.div`
  display: flex;
  justify-content: flex-end;
  /* margin:0.5rem 0 0 4rem; */
  margin: 1rem 3rem 0 0;
  column-gap: 0.5rem;
  /* row-gap: 5rem; */
  border-radius: 20px;
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
