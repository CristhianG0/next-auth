import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
export default function LoginPage() {
    const {data: session, status} = useSession()
    const router = useRouter()
    if(status !=='loading' && status === 'authenticated'){
        router.push('/')
    }
    return (
        <div className="buttons">
       <button className="btn" onClick={() => signIn('github')}>
        Signin with Github
       </button>
        </div>
    )
}