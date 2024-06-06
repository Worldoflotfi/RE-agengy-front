'use client'
import React from 'react'
import Heading from '../utils/Heading'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Heading
                title='Al Mokhbir-Admin'
                description='Devenir un agent immobilier'
                keywords='immobilier-neuf,immobilier-ancien'
            />
            <div className="flex h-[200vh]">
                <div className="1500px:w-[16%] w-1/5">
                    {/* <AdminSidebar /> */}
                </div>
                <div className="w-[85%]">

                </div>
            </div>
        </div>
    )
}

export default page