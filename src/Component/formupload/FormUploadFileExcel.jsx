import React from "react";
import { ProFormUploadButton } from "@ant-design/pro-components";

function FormUploadFileExcel(props) {
  const handleUpload = async (file) => {
    console.log(file);
  };
  return (
    <div  className="text-center">
      <ProFormUploadButton
        name="file"
        
       
        // label="Upload Ảnh"
        title="Upload File"
        fieldProps={{
          listType: "picture-card",
          method: "POST",
          name: "file",
          customRequest: handleUpload,
          multiple: false,

          openFileDialogOnClick: true,
         
        }}
      />
    </div>
  );
}

export default FormUploadFileExcel;
