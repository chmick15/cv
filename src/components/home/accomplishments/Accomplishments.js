import React from "react";

const Accomplishments = () => {

    return (
        <div className="grid grid-cols-5">
            <div className="grid col-span-5 p-2 text-center bg-green-500 rounded-t-lg text-xl font-semibold">
                <p>Personal Acomplishments</p>
            </div>
            <div className="grid col-span-5 py-1">
                <div className='pl-4 italic underline'>
                    <p>2022</p>
                </div>
                <div className='px-2 text-justify'>
                    <p>Professionnal Degree in web and mobile development application (RNCP 6 - Niveau Bac +3/ Bac +4) ๐จ๐ปโ๐ป</p>
                </div>
            </div>
            <div className="grid col-span-5 py-1">
                <div className='pl-4 italic underline'>
                    <p>2020</p>
                </div>
                <div className='px-2 text-justify'>
                    <p>Working Holidays Visa in Colombia ๐จ๐ด</p>
                </div>
            </div>
            <div className="grid col-span-5 py-1">
                <div className='pl-4 italic underline'>
                    <p>2019</p>
                </div>
                <div className='px-2 text-justify'>
                    <p>Master Degree in international management International exchanges in Glasgow (Scotland)๐ด๓ ง๓ ข๓ ณ๓ ฃ๓ ด๓ ฟ for one semester International exchanges in Oaxaca (Mexico)๐ฒ๐ฝ for one semester</p>
                </div>
            </div>
            <div className="grid col-span-5 py-1">
                <div className='pl-4 italic underline'>
                    <p>2017</p>
                </div>
                <div className='px-2 text-justify'>
                    <p>Degree in modern languages (Spanish & English) International exchange in Bogotรก (Colombia)๐จ๐ด for one year</p>
                </div>
            </div>
            <div className="grid col-span-5 py-1">
                <div className='pl-4 italic underline'>
                    <p>2014</p>
                </div>
                <div className='px-2 text-justify'>
                    <p>Degree of Social Worker โ</p>
                </div>
            </div>
        </div>
    )
};

export default Accomplishments;