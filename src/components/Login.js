import React , { useEffect, useState } from 'react'
import { firebase, auth } from '../../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Router from 'next/router';
export default function Login() {
   
   
    const [mynumber, setnumber] = useState('');
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');
    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log(response)
            }
        }, auth);
    }
    const requestOTP = () => {

        if (mynumber === "" || mynumber.length < 10) return;
        generateRecaptcha();
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, '+91'+mynumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log(confirmationResult)
                setshow(true)
            }).catch((error) => {
                // Error; SMS not sent
                console.log('SMS not sent', error)
            });

       
    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        confirmationResult = window.confirmationResult
        confirmationResult.confirm(otp).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(user)
            localStorage.setItem('carlelo-user-accessToken', user.auth.currentUser.accessToken)
            Router.push('/')
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            console.log("user couldn;t sign in bad verification code",error)
        });
    }
    return (
        <div style={{ "marginTop": "200px" }}>
            <center>
                <div style={{ display: !show ? "block" : "none" }}>
                    <input value={mynumber} onChange={(e) => {
                        setnumber(e.target.value)
                    }}
                        placeholder="phone number" />
                    <br /><br />
                    <div id="recaptcha-container"></div>
                    <button id='sign-in-button' onClick={requestOTP}>Send OTP</button>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                    <input type="text" placeholder={"Enter your OTP"}
                        onChange={(e) => { setotp(e.target.value) }}></input>
                    <br /><br />
                    <button onClick={ValidateOtp}>Verify</button>
                </div>
            </center>
        </div>
    )
}