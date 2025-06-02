function AddPostForm() {
  return (
    <div className="bg-white p-4 rounded-md shadow-lg">
      <form className="flex flex-col gap-2" onSubmit={() => {}} noValidate>
        <textarea
          className="rounded resize-none bg-[#F6F6F6]"
          rows={4}
          placeholder="Enter some text here..."
        ></textarea>
        {/* <p>Errors will be appear here</p> */}
        <button className="bg-[#8BC3D6] hover:bg-[#79b3c6] p-2 rounded font-semibold text-white cursor-pointer">
          Publish
        </button>
      </form>
    </div>
  )
}

export default AddPostForm
