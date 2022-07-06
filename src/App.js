import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./Users";
import Pagination from "./Pagination";
import { USER_PER_PAGE } from "./Constants";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // console.log(users);
  // console.log(totalPages);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://randomuser.me/api/?page=4&results=24&seed=abc"
      );
      setLoading(false);
      setUsers(res.data.results);
      setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE));
    };
    getUsers();
  }, []);

  const handleClick = num => {
    setPage(num);
  };

  return (
    <div className="justify-content-center text-center bg-dark text-light">
      <h1>Pagination</h1>
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Users users={users} page={page} />
          <Pagination totalPages={totalPages} handleClick={handleClick}/>
        </>
      )}
    </div>
  );
}

export default App;
