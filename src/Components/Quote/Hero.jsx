const Hero=({ onSubmitClick, isSubmitted  })=>{
    return(<>
      <div >
        <div>
            <h1 className="text-3xl font-bold pt-6">
            We’re Ready to Assist You!
            </h1>
            <p className="text-md pt-8">
            At WellCreator, we partner with you to develop a tailored solution for your project or facility. From design to manufacturing and shipping, we handle it all—going the extra mile to ensure your complete satisfaction.
            </p>
            <p className="text-md pt-4">
            Simply fill out the form, and a dedicated WellCreator expert will take care of the rest.
            </p>
            <button
        onClick={onSubmitClick}
        className={`mt-10 px-6 py-2 rounded text-white ${
          isSubmitted ? "bg-black cursor-default" : "bg-purple hover:bg-black"
        }`}
        disabled={isSubmitted}
      >
        {isSubmitted ? "Submitted" : "Submit Form"}
      </button>
        </div>
      </div>
    </>)
}
export default Hero;