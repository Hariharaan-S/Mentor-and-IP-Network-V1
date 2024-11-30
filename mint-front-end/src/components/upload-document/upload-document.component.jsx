import React from "react";
import { StyledDocumentContainer, StyledInput } from "./upload-document.styles";
import Button from "../button/button.component";


const UploadDocument = () => {
    return (
        <StyledDocumentContainer>
            <h2 style={{
                textAlign: "center",
                marginBottom: "20px"
            }}>
                Upload Your Document</h2>
            <form id="upload-form" enctype="multipart/form-data" style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <label for="category">Document Category:</label>
                <StyledInput type="text" id="category" name="category" required />

                <label for="document">Select Document:</label>
                <StyledInput type="file" id="document" name="document" accept=".pdf,.txt,.png" required />

                <Button content={"Upload Document"} />
            </form>
            {/* <div id="response-message"></div>
            <a href="/get/ip">View Docs</a> */}

            {/* <div> <a
                href="https://{{ file.bucket }}.s3.{{ file.region }}.amazonaws.com/{{ file.filename }}">{{
                    file.filename
                }}</a>
            </div> */}
        </StyledDocumentContainer >
    )
}

export default UploadDocument;