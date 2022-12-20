import React from 'react'
import '../Pages/add_product.css'
import profile from '../assets/images/NEW TIGER LOGO-08.png'
const Add_Products = () => {
    return (
        <>
            <main>
                <div className='flex flex-col md:flex-row m-20    newProduct   '>

                    <h1 className='text-lg  font-normal text-red-900 mr-28 '> Add Products</h1>

                    <div className='font-sm   space-x-28'>
                        <span className="mr-28">Goto Website</span>
                        <div className="form-outline w-8 -mt-6  ">

                            <input type="search" id="form1" placeholder='Search here' className="form-control w-42 h-[30px] border-solid border-2 border-grey-900 rounded-full " />


                        </div>
                        <button type="button" className="  ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-center ml-[140px] -mt-11  bg-red-400 w-[20px] h-[26px]" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>

                    </div>
                    <div className="ml-28  ">
                        <select className="border-solid border-2 border-grey-900 rounded-full ml-[60px] w-40 h-8 ">
                            <option value="vishal" className='text-center '>Vishal Nayak</option>

                        </select>


                    </div>



                </div>
                <div className='flex flex-col md:flex-row mx-11   w-[85%] h-[50px] border-solid border-2 border-grey-900 rounded-full pb-8' >

                    <h4 className='text-sm ml-4 m-2 '>Add Products From Our System</h4>
                    <h4 className='text-sm m-2 ml-28'>Add Your Custom Products</h4>
                    <h4 className='text-sm m-2 ml-28'>Add Products From Third Party Platform</h4>



                </div>
                <div className='flex flex-col md:flex-row m-20 pb-0'>
                <h3 className='mr-40 '>Select Main Category</h3>
                <h3 className='mr-36 '>Select Broad Category</h3>
                <h3 className='mr-40'>Select Sub Category</h3>

               
                </div>

                <div class="flex flex-col md:flex-row m-20   ">
  <select className='mr-40  border-solid border-2 border-grey-900 w-40 h-8  rounded-full' >
    <option >Apple iPad Air </option>
    <option>Apple iPad Air </option>
    <option>Apple iPad Air </option>
  </select>
  <select className='mr-40 border-solid border-2 border-grey-900 w-40 h-8  rounded-full'>
    <option >Apple iPad Air </option>
    <option>Apple iPad Air </option>
    <option>Apple iPad Air </option>
  </select>
  <select className='mr-40 border-solid border-2 border-grey-900 w-40 h-8  rounded-full'>
    <option >Apple iPad Air </option>
    <option>Apple iPad Air </option>
    <option>Apple iPad Air </option>
  </select>
  
 
</div> 

<div className='text-lg  font-normal ml-24 ' >

<h4>Select Products</h4>
<select className='mr-40 border-solid border-2 border-grey-900 w-[82%] h-8  rounded-full my-5 '>
    <option >Apple iPad Air </option>
    <option>Apple iPad Air </option>
    <option>Apple iPad Air </option>
  </select>
</div>


            </main>



        </>
    )
}

export default Add_Products