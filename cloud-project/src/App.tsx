import React from "react";
import { FileUpload } from "./FileUpload/index";
import Dropbox from "./cloud/Dropbox";
import Googledrive from "./cloud/Googledrive";
import Onedrive from "./cloud/Onedrive";
import styled from 'styled-components';
//import Undraw_cloud from "./icons/undraw_cloud_files_wmo8.svg";

const Btn = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-around;
	justify-items: 'space-between';
	min-height: 40px;
  width: 600px;
  height: 200px;
  padding: 50px;
  background-image: linear-gradient(90deg,rgb(218, 17, 85), rgb(241, 44, 51));
  position: relative;
  margin: auto;
  border-radius:0px 0px 20px 20px;
`;

function App() {
  return (
    <div className="App">
      <FileUpload/>
      <Btn>   
        <Dropbox/>
        <Googledrive />
        <Onedrive />
       
      </Btn>
    </div>
  );
}

export default App;
