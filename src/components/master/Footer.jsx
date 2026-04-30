import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black backdrop-blur-lg border-t border-white/10">
      <div className='mx-auto w-full max-w-screen-xl xl:pb-2'>
        <div className='md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4'>
            <div className='mb-12 flex-col flex gap-4 max-w-md'>
                <div className='text-white text-2xl font-black'>Codever</div>
                <div className='text-white/50 text-sm'>
                    <p>
                        Codever, 2025 yılında Oktay Saygın ve Sedat Budak tarafından kurulan Türkiyenin en prestijli yazılım firmasıdır.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3'>
                <div>
                    <h2 className='mb-6 text-lg tracking-tighter font-semibold text-white'>Hızlı Bağlantılar</h2>
                    <ul className='gap-4 grid text-white/50 text-sm font-medium'>
                        <li><Link href='/'>Anasayfa</Link></li>
                        <li><Link href='/'>Hakkımızda</Link></li>
                        <li><Link href='/'>Projelerimiz</Link></li>
                        <li><Link href='/'>İletişim</Link></li>
                    </ul>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer