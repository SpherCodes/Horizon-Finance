import { logoutAccount } from '@/lib/actions/user.actions';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

function Footer({user,type="desktop"}:FooterProps)  {
    const router = useRouter();

    const HandleLogOut = async () => {
        const logout =   await logoutAccount();
        if(logout){
            router.push('/sign-in');
        }
    }
    return (
        <footer className='footer'>
            <div className= {type==='mobile'?  'footer_name-mobile' : 'footer_name'}>
                <p className='text-xl font-bold text-grey-700'>
                    {user?.name[0]}
                </p>
            </div>

            <div className= {type==='mobile'?  'footer_email-mobile' : 'footer_email'}>
                <h1 className='text-14 truncate font-semibold text-grey-700'>
                    {user?.name}
                </h1>
                <p className='text-14 truncate font-normal text-grey-500'>
                    {user?.email}
                </p>
            </div>
            <div className='footer_image' onClick={HandleLogOut}>
                <Image
                    src='/icons/logout.svg'
                    width={20}
                    height={20}
                    alt='logout' 
                />
            </div>
        </footer>
    )
}

export default Footer
