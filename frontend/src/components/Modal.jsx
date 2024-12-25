import React from 'react'

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <>{
            isModalOpen &&
            (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                <div className='bg-white w-[90%] md:w-[40%] rounded-md p-5 shadow-lg'>
                    <h2 className='text-lg font-bold mb-3'>Update Post</h2>
                    <textarea
                        className='w-full h-32 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#3500c5c0]'
                        placeholder='Update your post...'
                    />
                    <div className='flex justify-end gap-3 mt-4'>
                        <button
                            onClick={toggle}
                            className='bg-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-400'
                        >
                            Cancel
                        </button>
                        <button className='bg-[#3500c5c0] px-4 py-2 text-white rounded-md hover:bg-[#25008e]'>
                            Save
                        </button>
                    </div>
                </div>
            </div>
            )
        }
        </>
    )
}

export default Modal