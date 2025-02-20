import { useEffect } from "react";
import { useState } from "react";

const localcache={};

export const UseFetch=(url)=>{
    const [state, setstate] = useState({
        data:null,
        isloading:true,
        hasError:false,
        Error:null
    });

    const getFetch= async ()=>{

        if(localcache[url]){
            setstate({
                data:localcache[url],
                isloading:false,
                hasError:false,
                Error:null
            })
            return;
        }

        setLoading();

        const res = await fetch(url);
        if(!res.ok){
            setstate({
                ...state,
                hasError:true
            });
            return;
        }
        
        const data = await res.json();
        setstate({
            data:data,
            isloading:false,
            hasError:false,
            Error:null
        })
        localcache[url]=data;
    }

    const setLoading=()=>{
        setstate({
            data:null,
            isloading:true,
            hasError:false,
            Error:null
        })
    }

    useEffect(()=>{
        getFetch();
    },[url])

    return ({
        data: state.data,
        isloading: state.isloading,
        hasError: state.hasError
    })
}