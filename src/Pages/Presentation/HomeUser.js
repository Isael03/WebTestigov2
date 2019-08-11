import React from "react";
import  { Container} from "@material-ui/core";
import PanelCases from '../../Components/PanelCases'


const HomeUser = (props) => {
  const {data}=props 
  return (
    <Container maxWidth={false}>
        <PanelCases nombre='Recientes' data={data}/>
    </Container>
    
  );
};
export default HomeUser