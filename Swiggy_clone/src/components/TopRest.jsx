import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function TopRest() {
    const [slide, setSlide] = useState(0);
    const [data, setdata] = useState([]);

    const fetchTopRestaurant = async () => {
        try {
            const response = await fetch("http://localhost:5000/top-restaurant-chains");
            const apidata = await response.json();
            setdata(apidata);
        } catch (error) {
            console.error("Error fetching top restaurant data:", error);
        }
    }

    useEffect(() => {
        fetchTopRestaurant();
    }, []);
    return (
        <>
            <div className='max-w-[1200px] mx-auto px-2'>
                <div className='flex my-3 items-center justify-between'>
                    <div className='text-[25px] font-bold'>Top restaurant chains in Jodhpur</div>
                </div>

                <div className='flex gap-5 overflow-hidden'>
                    {
                    data.map(
                        (d,i) => {
                            return <Card width="w-full md:w-[280px]" {...d} key={i}/>
                        }
                    )
                    }
                </div>
                <hr  className='my-4 border-[1px]'/>
            </div>
        </>
    )
}
