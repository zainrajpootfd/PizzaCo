import { useState } from "react";
import { useDispatch } from "react-redux";
import { userUpdate } from "./userSlice";
import { useNavigate } from "react-router-dom";
function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userUpdate(username));
    navigate("/menu");
    if (!username) return;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mt-10 text-lg md:font-sans md:text-xl">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-8 mt-2 h-8 w-72 transition-all duration-300 hover:w-96 hover:bg-yellow-100"
      />

      {username !== "" && (
        <div>
          <button className="w-300 inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-widest ring-2 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2">
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
