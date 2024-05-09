
function NotFound() {
  return (
    <div className='w-full h-full gap-3 flex justify-center items-center flex-col'>

   <h1 className='text-4xl text-red-500'>
    404
   <span className='text-black'> page Not Found</span>
   </h1>
      <Link to="/" className="underline text-blue-600">
      Go to home
      </Link>
    </div>
  )
}

export default NotFound;