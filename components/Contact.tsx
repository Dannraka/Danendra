const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let us create awesome products!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
        </p>
  <div className="rounded-2xl w-9/12 bg-white">

  <form 
    className="flex flex-col text-center items-center bg-gradient-to-r from-blue-300 via-red-300 to-amber-300 rounded-xl shadow-2xl"
    action={'https://getform.io/f/d6d3622a-ec91-4d31-a986-7b373cb96bd3'}
    method="POST"
    encType="multipart/form-data"
    >
    <div className="pt-6 rounded-8 m-4 w-full flex justify-center text-black">
      <input
        type="name"
        name="name"
        className="w-2/3 border-solid border-2 rounded-lg p-1"
        placeholder="Name"
      />
      </div>
      <div className="rounded-8 m-4 w-full flex justify-center text-black">
      <input
        type="email"
        name="email"
        className="w-2/3 border-solid border-2 rounded-lg p-1"
        placeholder="Email"
      />
      </div>
      <div className="rounded-8 m-4 w-full flex justify-center text-black">
      <input
        type="subject"
        name="subject"
        className="w-2/3 border-solid border-2 rounded-lg p-1"
        placeholder="Subject"
      />
      </div>
      <div className="rounded-8 m-4 w-full flex justify-center text-black">
      <textarea cols={30} rows={5}
        name="message"
        className="w-2/3 border-solid border-2 rounded-lg p-1"
        placeholder="Message"
      />
    </div>
    <div className="py-3">
    <button className="transition bg-white hover:bg-gray-300 hover:duration-150 border-gray-200 shadow-2xl text-gray-900 font-medium px-4 py-2 rounded-md">Click me</button>

    </div>
  </form>
</div>
      </div>
    </div>
  );
};

export default Contact;
