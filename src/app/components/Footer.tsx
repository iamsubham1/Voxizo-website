import React from 'react';
import Link from 'next/link'; // Import Link component
import '../css/footer.css';

const Footer = () => {
    return (
        <>
            <footer id="footer" className='gap-5'>
                <div className="col col1">
                    <h3>Voxizo</h3>
                    <p>Made with <span style={{ color: '#BA6573' }}>❤</span> by our Devs</p>
                    <p style={{ color: '#818181', fontSize: 'smaller' }}>2024 © All Rights Reserved</p>
                </div>
                <div className="col col2  bg-red-200">
                    <Link href="/about" className='text-[#999999] hover:text-[#818181]'>About</Link>
                    <Link href="/mission" className='text-[#999999] hover:text-[#818181]'>Our&nbsp;mission</Link>
                    <Link href="/privacy-policy" className='text-[#999999] hover:text-[#818181]'>Privacy&nbsp;Policy</Link>
                    <Link href="/terms-of-service" className='text-[#999999] hover:text-[#818181]'>Terms&nbsp;of&nbsp;service</Link>
                </div>
                <div className="col col3">
                    <Link href="/services" className='text-[#999999] hover:text-[#818181]'>Services</Link>
                    <Link href="/products" className='text-[#999999] hover:text-[#818181]'>Products</Link>
                    <Link href="/join" className='text-[#999999] hover:text-[#818181]'>Join&nbsp;our&nbsp;team</Link>
                    <Link href="/partner" className='text-[#999999] hover:text-[#818181]'>Partner&nbsp;with&nbsp;us</Link>
                </div>
                <div className="backdrop"></div>
            </footer >
        </>
    );
}

export default Footer;
