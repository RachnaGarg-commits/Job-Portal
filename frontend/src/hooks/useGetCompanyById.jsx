import { setAllJobs } from '@/redux/jobSlice';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setSingleCompany } from '@/redux/companySlice';

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchSingleCompany = async () => {
        try {
            const res= await axios.get(`https://jobportal-backend-8wn5.onrender.com/api/v1/company/get/${companyId}`,{withCredentials:true});
            if(res.data.success){
                dispatch(setSingleCompany(res.data.company));
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchSingleCompany();
  },[companyId, dispatch])
}

export default useGetCompanyById;