import React from 'react'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      
      
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" size="icon" className="rounded-full">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>


      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline" size="icon" className="p-6">
          <Avatar>
            <AvatarImage src="https://img.freepik.com/premium-vector/company-logo-business-logo-logo-brand_982550-3.jpg" />
          </Avatar>
        </Button>

        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      
      <div className="mt-4">
        <h1 className="font-bold text-lg">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

     
      <div className="flex gap-2 mt-3 flex-wrap">
        <Badge variant="ghost" className="text-blue-700 font-bold">
          12 Positions
        </Badge>
        <Badge variant="ghost" className="text-[#F83002] font-bold">
          Part Time
        </Badge>
        <Badge variant="ghost" className="text-[#7209b7] font-bold">
          24 LPA
        </Badge>
      </div>

      
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#7209b7] text-white">
          Save For Later
        </Button>
      </div>

    </div>
  )
}

export default Job
