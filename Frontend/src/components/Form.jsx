function Form({ title, user, pass, setUsername, setPassword, onSubmit }) {
  return (
    <form onSubmit={onSubmit}
    >
      <h2 className="text-2xlfont-boldtext-centermb-3 font-black ">{title}</h2>
      <div className="mb-3 inline "
      >
         <div className="flex justify-between mt-5
         ">
        <label
          className="inline-block 
                 mb-2"
        >
          Username
        </label>

        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 ml-3"
          value={user}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div className="flex justify-between mt-5
        ">
        <label className="block mb-2 mt-3">Password</label>
        <input
          type="password"
          className="w-full border border-gray-300 rounded-md p-2 ml-3"
          value={pass}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-2 py-1 mt-3
          hover:bg-blue-600 transition ml-12
          "
        >
          {title}
        </button>
      </div>
    </form>
  );
}

export default Form;
