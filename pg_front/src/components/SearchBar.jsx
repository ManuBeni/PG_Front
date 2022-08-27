import React, { useState } from "react";

// import { useDispatch } from "react-redux";
import Button from "@mui/material/Button/Button";
import s from "./SearchBar.module.css";
import lupa from "../lupa.png";
import SearchIcon from "@mui/icons-material/Search";


export default function SearchBar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()




  function handleInput(e) {

    setInput(e.target.value);
    console.log(e.target.value);
  }


    function handleSubmit(e) {
    e.preventDefault()
    dispatch(searchProduct(input));
    setInput('')
}
 
  return (
    <div>
      <section className={s["search-container"]}>
        <input
          className={s["input-detail"]}
          type="text"
          placeholder="¿Buscás un producto?"
          onChange={(e) => handleInput(e)}
        ></input>

        <Button
          className={s["input-btn"]}
          size="small"
          onClick={(e) => {
            handleSubmit(e);
          }}
          style={{ background: "transparent" }}
        >
          <SearchIcon fontSize="large" className={s["search-icon"]} />
        </Button>
      </section>
    </div>
  );

}
