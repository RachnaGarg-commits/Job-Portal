import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { Pen } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Contact } from 'lucide-react'

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'></div>
                <div className='flex items-center gap-4'>
                    <Avatar className="h-24 w-24">
                        <AvatarImage src="https://img.freepik.com/premium-vector/company-logo-business-logo-logo-brand_982550-3.jpg" alt="profile" />
                    </Avatar>
                    <div>
                        <h1 className='font-medium text-xl'>Full Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nam quae rem laudantium officiis iure neque cumque consequatur, omnis, quibusdam debitis expedita obcaecati eos quidem ad.</p>
                    </div>
                    <Button className="text-right" variant="outline"><Pen /></Button>
                </div>
                <div>
                    <div className="flex items-center"></div>
                    <Mail/>
                    <span>garg@gmail.com</span>

                    <Contact/>
                    <span>8967453252</span>
                </div>
            </div>
        </div>
    )
}

export default Profile
