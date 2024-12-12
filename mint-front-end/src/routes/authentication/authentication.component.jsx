import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/register/register.component";
import { Fragment } from "react";
const Authentication = () => {
    return (
        <Fragment>
            <SignIn />
            <SignUp />
        </Fragment>

    )
}

export default Authentication;