import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { LoginSocialGoogle } from 'reactjs-social-login'
import bgimage from '../assets/signUp.jpg'


const SignUp = () => {

    const [signUpData, setSignUpData] = useState({
        email: "", name: '', createPassword: '', confirmPassword: ''
    })

    const [signup, setSignUp] = useState(false)
    const navigate = useNavigate();

    function handleFormData(event) {
        setSignUpData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit() {
        console.log(signUpData)

        if (signUpData.createPassword !== signUpData.confirmPassword) {
            // alert(";alkdfj;lasjdf")
            toast.error('password did not match')
            return;
        }
        else {
            setSignUp(true)
        }
        if (signup) {
            navigate('/')
        }

    }


    return (
        <div className='flex flex-col justify-center items-center h-[93vh] relative'>
            <p className='text-2xl my-2 text-white font-bold relative z-50 mediaQuary'>Create Your Account</p>
            <form className='w-[450px] p-3 border-2 border-solid border-black z-50 rounded-md shadow-lg glassEffect max-w-lg flex flex-col gap-3 signUpPage ' onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <div className='text-xl text-black my-1 mediaQuary'>
                        Name
                    </div>
                    <input
                        id='name'
                        type="text"
                        required
                        placeholder='Enter Your Full Name'
                        value={signUpData.name}
                        name='name'
                        onChange={handleFormData}
                        className='border-2 border-solid border-black w-full h-14 px-3 text-lg text-black bg-transparent rounded-md placeholder:text-gray-600 mediaQuary'
                    />
                </label>
                <label htmlFor="email">
                    <div className='text-xl text-black mt-1 mediaQuary'>
                        Email
                    </div>
                    <input
                        id='email'
                        type="email"
                        required
                        placeholder='Enter Your Email Address'
                        value={signUpData.email}
                        name='email'
                        onChange={handleFormData}
                        className='border-2 border-solid border-black w-full h-14 px-3 text-lg text-black bg-transparent rounded-md placeholder:text-gray-600 mediaQuary'
                    />
                </label>
                <div className='flex flex-row gap-2'>

                    <label htmlFor="createPassword">
                        <div className='text-xl text-black mt-1 mediaQuary'>
                            Create Password
                        </div>
                        <input
                            id='createPassword'
                            type="text"
                            required
                            placeholder='Create Password'
                            value={signUpData.createPassword}
                            name='createPassword'
                            onChange={handleFormData}
                            className='border-2 border-solid border-black w-full h-14 px-3 text-lg text-black bg-transparent rounded-md placeholder:text-gray-600 mediaQuary'
                        />
                    </label>
                    <label htmlFor="confirmPassword">
                        <div className='text-xl text-black mt-1 mediaQuary'>
                            Confirm Password
                        </div>
                        <input
                            id='confirmPassword'
                            type="text"
                            required
                            placeholder='Confirm Password'
                            value={signUpData.confirmPassword}
                            name='confirmPassword'
                            onChange={handleFormData}
                            className='border-2 border-solid border-black w-full h-14 px-3 text-lg text-black bg-transparent rounded-md placeholder:text-gray-600 mediaQuary'
                        />
                    </label>
                </div>
                <div className='w-full border-2 border-solid border-black flex justify-center items-center mt-3'>
                    <button className='h-12 bg-orange-500 w-full text-xl text-black mediaQuary ' >
                        Sign Up
                    </button>
                </div>
                <div className='flex justify-evenly items-center mediaQuary'>
                    <span className='border-2 border-solid border-gray-400 w-4/12' ></span>
                    <p>OR</p>
                    <span className='border-2 border-solid border-gray-400 w-4/12' ></span>
                </div>
                <LoginSocialGoogle
                    className='w-full flex justify-center mediaQuary'
                    client_id={"982616155604-ot518hf8hgo2j7c2o9fa69eekaomr91e.apps.googleusercontent.com"}
                    scope="openid profile email"
                    discoveryDocs={['claims supported']}
                    accessType="online"
                    onResolve={(provider, data) => console.log(provider, data)}
                    onReject={(error) => console.log(error)}
                    onClick={handleSubmit}
                >
                    <GoogleLoginButton />
                </LoginSocialGoogle>
            </form>
            <div className='flex w-full absolute top-0  '>
                <img src={bgimage} className='w-screen border-2 border-solid border-black h-[93vh] opacity-70 z-0 ' alt="" />
            </div>
        </div>

    )
}

export default SignUp
