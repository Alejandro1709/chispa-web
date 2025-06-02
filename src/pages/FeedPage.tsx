function FeedPage() {
  return (
    <>
      {/* Publish Form starts */}
      <div className="bg-white p-4 rounded-md shadow-lg">
        <form className="flex flex-col gap-2" onSubmit={() => {}}>
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
      {/* Publish Form ends */}

      {/* Posts list starts */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 bg-white shadow-lg rounded-md p-4">
          <h2 className="text-xl font-medium">@alejandro</h2>
          <p>The contract will be here June 12!!!!</p>
          <button className="bg-[#8BC3D6] hover:bg-[#79b3c6] p-2 rounded font-semibold text-white cursor-pointer">
            Like Post
          </button>
        </div>
      </div>
      {/* Posts list ends */}
    </>
  )
}

export default FeedPage
