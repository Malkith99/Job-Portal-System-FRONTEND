import { Fragment, useEffect, useState } from "react";
//Fragment is imported from React to avoid unnecessary HTML wrappers.
//useEffect and useState are imported from React to manage side effects and state within the component.
import success from "../../../src/images/done.png";
import unilogo from "../../images/LOGO_OF_RUHUNA.jpg"
import styles from "./styles.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState("false");
    const param = useParams();
    useEffect(() => {
        const verifyEmailUrl = async () => {
            try {
                const url = `http://localhost:4000/users/${param.id}/verify/${param.token}`;
                const { data } = await axios.get(url);
                console.log(data);
                window.location.href = '/home'; //if request is successful, the page us redirected to "/home"
                setValidUrl(true);
            } catch (error) {
                console.log(error)
                setValidUrl(false)
            }
        };
        verifyEmailUrl().then()
    }, [param])
    return (
        <Fragment>
            {validUrl ? (                                //inline conditional rendering is used
                <div className={styles.constructor}>
                    <img src={unilogo} alt="salon_logo" className={styles.salon_logo} />
                    <img src={success} alt="success_img" className={styles.success_img} />
                    <h1>Email Verified Successfully</h1>
                    <Link to="/login">
                        <button
                            className={styles.green_btn}>Login
                        </button>
                    </Link>
                </div>
            ) : (
                <h1>404 Not Found</h1>
            )}
        </Fragment>
    )
};

export default EmailVerify;