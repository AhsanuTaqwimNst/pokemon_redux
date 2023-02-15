import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const initialState = createAsyncThunk("pokemom/getPokemon", async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return (
        response.data
        ) 
});