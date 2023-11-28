import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";

const CarLIsting = () => {

    const [cars, setCars] = useState([]);
    const [filteredCarsData, setFilteredCarsData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_WEBSITE_URL}/cars`)
            .then(res => res.json())
            .then(data => {
                setFilteredCarsData(data)
                setCars(data);
                setLoading(false);
            })
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        // Filter cars based on the search query
        const filteredCars = cars.filter((car) =>
            car.model.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCarsData(filteredCars);
        setCurrentPage(1);
    };

    const modelData = cars.map((car) => car.model);
    const uniqueModelData = ["All", ...new Set(modelData)];

    const handleModelFilter = (model) => {
        if (model === "All") {
            setFilteredCarsData(cars);
        } else {
            const filteredCars = cars.filter((car) => car.model === model);
            setFilteredCarsData(filteredCars);
        }
        setCurrentPage(1);
    }

    const carsPerPage = 6;
    const totalPages = Math.ceil(filteredCarsData.length / carsPerPage);
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    const currentProducts = filteredCarsData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
            <div>
                <form className='my-10 px-5' onSubmit={handleSearch}>

                    <div className="flex gap-2 justify-center my-2">

                        <input
                            className="w-8/12 px-4 rounded-2xl border border-gray-300 p-2"
                            type="text"
                            placeholder='Search for your ride'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            required
                        />
                        <button type='submit' className='btn normal-case'> Search <FaSearch /></button>
                    </div>
                </form>
            </div>
            {/* heading title */}
            <div className='space-y-5'>
                <h2 className='text-5xl font-bold text-center font-serif'>Our Rental Fleet</h2>
                <p>
                    Unleash the thrill of the open road with our exceptional SpeedyWheel collection, where performance meets passion. Our vast inventory boasts over 200 cars, each meticulously curated to elevate your driving experience. Picture yourself behind the wheel of pure exhilaration, as our SpeedyWheel vehicles deliver a symphony of power, precision, and style. Whether you crave the adrenaline rush of a sports car or the refined elegance of a luxury sedan, our diverse selection ensures there's a perfect match for every discerning driver. Don't settle for ordinary when you can command the extraordinary with SpeedyWheel. Explore our extensive lineup and elevate your driving dreams to new heights.
                </p>
            </div>

            {
                loading ? <div className='text-5xl font-bold text-center font-serif animate-spin'>Loading...</div> : <div></div>
            }
            <div className='flex gap-10 my-10'>
                <div className='w-1/5'>
                    {
                        uniqueModelData.map((data, i) => <p key={i} className='normal-case border-2 rounded-lg font-serif cursor-pointer p-2 text-md my-2' onClick={() => handleModelFilter(data)}>{data}</p>)
                    }
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center my-16`}>
                    {
                        currentProducts.map(car => <div
                            key={car._id}
                            className="card h-[540px] bg-base-100 shadow-xl p-2 ">
                            <figure>
                                <img src={car.picture} alt={car.model} className="w-full h-[400px]" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title mx-auto font-serif ">{car.model}</h2>
                                <p className='text-xl'><span className='font-serif '>Rent per day: </span>${car.rent}</p>
                                <button className='btn bg-cyan-600 text-white hover:text-black w-2/3 font-serif mx-auto'>View Details</button>

                            </div>
                        </div>)
                    }

                </div>
            </div>
            <div className="flex justify-center gap-4 my-10">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handlePageChange(index + 1)} >
                        <p className='cursor-pointer font-serif border-2 border-transparent rounded-lg p-1 px-2 bg-sky-200 shadow-xl'>{index + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarLIsting;