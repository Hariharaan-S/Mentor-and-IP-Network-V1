import React, { useState } from "react";
import { StyledDocumentContainer, StyledInput } from "./upload-document.styles";
import Button from "../button/button.component";
import { sendDocument } from "../../utilities/dataAccessLayer";

const UploadDocument = () => {
    const [formData, setFormData] = useState({
        category: "",
        document: null,
    });

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (files) {
            setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare form data
        const data = new FormData();
        data.append("category", formData.category);
        data.append("document", formData.document);

        sendDocument(data);
    };

    return (
        <StyledDocumentContainer>
            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                }}
            >
                Upload Your Document
            </h2>
            <form
                id="upload-form"
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <label htmlFor="category">Document Category:</label>
                <StyledInput
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="document">Select Document:</label>
                <StyledInput
                    type="file"
                    id="document"
                    name="document"
                    accept=".pdf,.txt,.png"
                    onChange={handleChange}
                    required
                />

                <Button content={"Upload Document"} buttonType={"submit"} />
            </form>
        </StyledDocumentContainer>
    );
};

export default UploadDocument;
