

import Link from "next/link";

export default function HomeComponet() {
    return (
        <div className="w-full h-screen flex items-center justify-center gap-4">
            <Link href={'/Login'} className="w-[120px] h-[48px] rounded-xl bg-[#3C1AB9] flex items-center justify-center text-white">
                Login Page
            </Link>
            <Link href={'/Register'} className="w-[120px] h-[48px] rounded-xl bg-[#165A0F] flex items-center justify-center text-white">
                Register Page
            </Link>
        </div>
    )
}
