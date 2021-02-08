import React,{useContext} from "react";
import {UserContext} from "../UserContext";
import Dropboxicon from "../icons/Dropbox_Icon.svg.png";

const Dropbox =()=>{
    const deger=useContext(UserContext);
    console.log(deger);
    /*const [selectedFile, setSelectedFile] = useState();

    const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			//'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	};*/

    return(
        <div>
            <input type="image" src={Dropboxicon} value="submit" width="50px" height="45px" title="Upload to Dropbox"></input>
        </div>
    )
}

export default Dropbox;