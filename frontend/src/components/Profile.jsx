import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { Pen } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Contact } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'

//const skills = ["Html", "CSS", "Javascript", "Reactjs"]
const isResume = true;

const Profile = () => {
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'></div>
                <div className='flex items-center gap-4'>
                    <Avatar className="h-24 w-24">
                        <AvatarImage src="https://img.freepik.com/premium-vector/company-logo-business-logo-logo-brand_982550-3.jpg" alt="profile" />
                    </Avatar>
                    <div>
                        <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                        <p>{user?.profile?.bio}</p>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
                </div>
                <div className='my-5'>
                    <div className="flex items-center gap-3">
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            user?.profile?.skills?.length > 0
                                ? user.profile.skills.map((item, index) =>
                                    <Badge key={index}>{item}</Badge>
                                )
                                : <span className="text-gray-400">No skills added</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOrginalName}</a> : <span>NA</span>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <AppliedJobTable />
            </div>
            <div>
                <UpdateProfileDialog open={open} setOpen={setOpen} />
            </div>
        </div>
    )
}

export default Profile
