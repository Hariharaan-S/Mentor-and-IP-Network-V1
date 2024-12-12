import styled from "styled-components";

export const StyledMentorFind = styled.div`
    padding: 4rem 8rem;
`
export const MentorDetails = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 25px;
`

export const SearchField = styled.div`
    padding: 1rem;
    display: flex;
    column-gap: .5rem;
`

export const StyledInput = styled.input`
    padding: 10px;
    width: 400px;
    height: 20px;
    margin-top: 12px;
    border-radius: 10px;
    border: .9px solid hsl(228, 15%, 50%);

    &::placeholder {
        font-family: 'Poppins', sans-serif;
    }
`