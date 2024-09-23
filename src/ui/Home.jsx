import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { useNavigate } from "react-router-dom";

function Home() {
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    navigate("/menu");
    if (!username) return;
  }

  return (
    <div className="my-10">
      <h1 className="text-center text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <button
          onClick={handleSubmit}
          className="mt-4 rounded-full bg-yellow-300 px-4 py-3"
        >
          continue order, {username}
        </button>
      )}
    </div>
  );
}

export default Home;
