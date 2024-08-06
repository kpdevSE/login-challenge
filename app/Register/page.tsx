'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image, { StaticImageData } from 'next/image';
import LoginImage from '../../public/Mask group.png';
import Link from 'next/link';
import twitterLogo from '../../public/twitter.png';
import appleLogo from '../../public/Apple.png';
import faceBookLogo from '../../public/facebook.png';
import googleLogo from '../../public/Google.png';

interface Logo {
    id: number;
    logoName: StaticImageData;
}

const logos: Logo[] = [
    { id: 1, logoName: twitterLogo },
    { id: 2, logoName: appleLogo },
    { id: 3, logoName: faceBookLogo },
    { id: 4, logoName: googleLogo },
];

const Login: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [agreed, setAgreed] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!agreed) {
            alert('Please agree to the terms and conditions.');
            return;
        }
        // for the connecting apis
        console.log({ name, email, password });
    };

    return (
        <div className="w-full h-screen flex lg:items-center justify-between md:items-start items-start">
            <div className="lg:w-[50%] w-full md:absolute lg:relative absolute z-0">
                <Image src={LoginImage} alt="Login Image" className="h-screen w-full" />
            </div>
            <div className="flex items-center justify-center flex-col lg:w-[50%] md:w-full z-10 md:bg-white md:h-[85vh] w-full bg-white h-[85vh] rounded-b-lg">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-start lg:w-[60%] md:w-[70%] w-[90%] gap-6"
                >
                    <div className="w-full flex flex-col items-start justify-start gap-2">
                        <h1 className='text-[#165A0F] text-3xl font-bold'>Sign Up</h1>
                        <p className='lg:text-lg text-lg'>Create your Account in seconds!</p>
                    </div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        className="pl-3 border border-1-[#333678] w-full h-[70px] rounded-xl"
                        placeholder="Babo Tunde"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        className="pl-3 border border-1-[#333678] w-full h-[70px] rounded-xl"
                        placeholder="info@gmail.com"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        className="pl-3 flex-col border border-1-[#333678] w-full h-[70px] rounded-xl"
                        placeholder="Password"
                    />
                    <div className="flex items-start justify-between w-full">
                        <div className="flex items-start justify-start gap-4">
                            <div className="flex items-center mb-4">
                                <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setAgreed(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                            </div>
                            <p>I Agreed <span className="text-[#165A0F] font-bold">Terms & Condition</span></p>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full h-[70px] bg-[#165A0F] text-white rounded-lg text-lg font-bold"
                    >
                        Sign Up
                    </button>
                    <div className="flex items-start justify-start text-lg w-full gap-2">
                        <p>Already have an Account?</p>
                        <Link href={'/Login'} className="text-[#165A0F] font-bold">
                            LogIn
                        </Link>
                    </div>
                    <div className="w-full flex items-center justify-center gap-3">
                        <div className="w-[40%] h-[2px] bg-[#333678] rounded-xl"></div>
                        <div className='w-[30%] flex items-center justify-center'>
                            <p className="text-center">Or Continue With</p>
                        </div>
                        <div className="w-[40%] h-[2px] bg-[#333678] rounded-xl"></div>
                    </div>
                    <div className='grid grid-cols-4 w-full gap-2 place-items-center'>
                        {logos.map((e) => (
                            <div className='w-[60%] h-[60px] flex items-center justify-center bg-[#165A0F] rounded-xl' key={e.id}>
                                <Image src={e.logoName} alt='logo name' width={30} height={30} />
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
