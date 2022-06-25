// import axios from "axios";
// import { SCORE } from "../types/score";

// export const getScore = () => async (dispatch) => {
//   const headers = {
//     // APIkey: process.env.REACT_APP_SCORE_API,
//     "Access-Control-Allow-Origin": "*",
//   };

//   const params = {
//     met: "Livescore",
//     APIkey: process.env.REACT_APP_SCORE_API,
//     method: "GET",
//   };

//   const ws = new WebSocket(`wss://wss.allsportsapi.com/live_events?APIkey=${process.env.REACT_APP_SCORE_API}`);

//   ws.onopen = () => {
//     // on connecting, do nothing but log it to the console
//     console.log("Web socket connected");
//   };

//   ws.onmessage = (evt) => {
//     // listen to data sent from the websocket server
//     const score = JSON.parse(evt.data);
//     dispatch({ type: SCORE, payload: score });
//     // console.log(score);
//   };

//   ws.onclose = () => {
//     console.log("disconnected");
//     // automatically try to reconnect on connection loss
//   };
// };

// export const getCollection = () => async (dispatch) => {
//   const headers = {
//     "X-RapidAPI-Key": "",
//     "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//     "Access-Control-Allow-Origin": "*",
//   };

//   const params = { offset: 0, limit: 300, asset_owner: "" };

//   // try {
//   //   const collection = await axios.get(`https://testnets-api.opensea.io/api/v1/collection/nova-fan-team-club-v2`, {
//   //     // headers,
//   //     // params,
//   //   });
//   //   console.log(collection.data);
//   // } catch (error) {
//   //   console.log(error);
//   // }
// };
