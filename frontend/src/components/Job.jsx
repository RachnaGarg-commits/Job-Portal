import React from 'react'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
  const navigate = useNavigate();
  //const jobId = "hghjhejibkvmvjfbfdf";

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference/ (1000*24*60*60));
  }

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      
      
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{daysAgoFunction(job?.createdAt) == 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button variant="outline" size="icon" className="rounded-full">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>


      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline" size="icon" className="p-6">
          <Avatar>
            <AvatarImage src={job?.company?.logo}/>
          </Avatar>
        </Button>

        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      
      <div className="mt-4">
        <h1 className="font-bold text-lg">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>

     
      <div className="flex gap-2 mt-3 flex-wrap">
        <Badge variant="ghost" className="text-blue-700 font-bold">{job?.position} Positions</Badge>
        <Badge variant="ghost" className="text-[#F83002] font-bold">{job?.jobType}</Badge>
        <Badge variant="ghost" className="text-[#7209b7] font-bold">{job?.salary}</Badge>
      </div>

      
      <div className="flex items-center gap-4 mt-4">
        <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
        <Button className="bg-[#7209b7] text-white">
          Save For Later
        </Button>
      </div>

    </div>
  )
}

export default Job
