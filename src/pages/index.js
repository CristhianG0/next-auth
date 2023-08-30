import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import { getSession,signOut} from 'next-auth/react';
export default function Homepage({session}){

/*
const {data: session, status} = useSession()
const router = useRouter()
 if (status === 'loading'){
  return <p>loading...</p>
 }
 if(status === 'unauthenticated'){
  router.push('/login')
}
*/
  return (
    <div>
     {
      session ? (
        <div>
                  <h1>{session.user.name}</h1>
        <p>{session.user.email}</p>
        <img src={session.user.image} alt=''/>
        </div>
      ) : (
        <p>Skeleton</p>
      )
     }
    <div className='buttons'> 
    <button className='btn' onClick={() =>signOut()}>
      Logout
     </button></div>
    </div>
  );
}
export const getServerSideProps =async (context) => {
 const session = await getSession(context)

 if(!session) return {
  redirect: {
    destination: '/login',
    permanent: false
  }
 }
  return{
  props: {
    session
  }
 }
}