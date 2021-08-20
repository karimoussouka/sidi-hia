
import React,{useState,useCallback,useEffect, createContext , useMemo } from 'react'
import axios from 'axios'

const DataContext = createContext();

const Providers = ({children}) => {

    //Customers API
    const [customers , setCustomers] = useState([]);

    const getCustomers = useMemo(async () => {

        const res = await axios.get('http://localhost:8000/api/membres');

        const data =  await res.data;

        setCustomers(data);

    },[])

    //Token API
        const [token , setToken] = useState([]);
    
        const getToken =  useMemo(async () => {
            const res = await axios.get('http://localhost:8000/api/tokens');
            const data = await res.data;
            setToken(data)
            console.log(data);
        },[])


        return (
            <DataContext.Provider value = {{token,customers}}>
                {children}
            </DataContext.Provider>
        )
}

export {DataContext , Providers}
