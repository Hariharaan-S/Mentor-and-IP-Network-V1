

export const login = async (username, password, role) => {
    fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password, role })
    }).then(res => res.json()).then(data => { return data.statusCode === 200 })
}

export const registerWithMint = async (data) => {
    fetch("http://localhost:5000/registertodatabase", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((res) => res.json()).then(resData => {
        console.log(resData);

        return resData.statusCode === 200
    })
}


export const sendDocument = async (data) => {
    try {
        const response = await fetch("http://localhost:5000/add/ip", {
            method: "POST",
            body: data,
        });

        if (response.ok) {
            const result = await response.json();
            alert("Document uploaded successfully: " + result.message);
        } else {
            const error = await response.json();
            alert("Error uploading document: " + error.message);
        }
    } catch (error) {
        alert("An error occurred: " + error.message);
    }
}