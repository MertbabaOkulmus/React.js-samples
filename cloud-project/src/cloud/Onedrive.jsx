import React from "react";
import Onedriveicon from "../icons/onedrive-1.svg";

const Onedrive = () => {
    return (
        <div>
            <input type="image" src={Onedriveicon} value="submit" width="50px" height="45px" title="Upload to One Drive"></input>


            <a class="btn btn-light-primary btn-icon" href="https://imza.io/api/v1/file/download?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJGaWxlSWQiOiJjNDhhZGQ2OS0wYzM3LTRmYTMtODQ2ZC03M2E3NTM1NmRkMDAiLCJTZXNzaW9uSWQiOiJiZGI2YzQ5Yi0wMTZlLWViMTEtODJiYi0wYTNjY2IwZWYyYjIiLCJuYmYiOjE2MTMyMjM5MjIsImV4cCI6MTYxMzIyNTcyMiwiaWF0IjoxNjEzMjIzOTIyLCJpc3MiOiJDbG91ZHBlZXIgR2xvYmFsIFRla25vbG9qaSBBLsWeLiIsImF1ZCI6ImltemEuaW8ifQ.6v8AysZQkc7f1sw2P_ZVBGez7eo0QPwFgN-RsyIEvt8">
                <i class="icon-download">indir</i>
            </a>

        </div>
    )
}

export default Onedrive;