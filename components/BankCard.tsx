import { formatAmount } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

const BankCard = ({account,userName,ShowBalance = false}) => {
    return (
        <div className='flex flex-col'>
            <Link href='/' className='bank-card'>
                <div className='bank-card_content'>
                    <div>
                        <h1 className='text-16 font-semibold text-white'>{account.name ||'Siphesihle'}</h1>
                        <p className='font-ibm-plex-serif font-black text-white'> {formatAmount(account.currentBalance)}</p>
                    </div>
                    <article className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <h1 className='text-12 font-semibold text-white'>{userName}</h1>
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='text-12 font-semibold text-white'>●●/●●</h1>
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='text-14 font-semibold text-white tracking-[1.1px]'>●●●● ●●●● ●●●●<span className='text-16'>1234</span></h1>
                        </div>
                    </article>
                </div>
                <div className='bank-card_icon'>
                    <Image 
                        src='/icons/Paypass.svg'
                        width={20}
                        height={24}
                        alt='Pay'
                    />
                    <Image 
                        src='/icons/mastercard.svg'
                        width={45}
                        height={32}
                        alt='Mastercard'
                        className='ml-5'
                    />
                    <Image 
                        src='/icons/lines.svg'
                        width={316}
                        height={190}
                        alt='lines'
                        className='absolute top-0 right-0'
                    />
                </div>
            </Link>
        </div>
    )
}

export default BankCard
