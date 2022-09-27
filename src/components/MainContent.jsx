import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/ContextProvider";
import { getData } from "../helpers/getData";
import Spinner from "./Spinner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Navbar from "./Navbar";

const MySwal = withReactContent(Swal);

const MainContent = () => {
  const apiURL = "https://api.coinlore.net/api/tickers/?limit=100";

  const { setDetails, details, loading, setLoading } = useContext(Context);


  useEffect(() => {
    const awaitData = async () => {
      await getData(setDetails, apiURL);
      setLoading(false);
    };
    awaitData();
    console.log(details);
  }, [loading]);

  const handleOnClick = ({target}) => {
    const findItem = details.data.find(item => item.id === target.id)
    MySwal.fire({
        title: findItem.name,
        icon: "info",
        text: `Change in the last 24h: ${findItem.percent_change_24h}, ${''}
               Change in the last 24h: ${findItem.percent_change_24h},
               Change in the last 24h: ${findItem.percent_change_24h}`,
        footer: `Market cap: $ ${findItem.market_cap_usd}`
      })
  }

  return (
    <>
    <Navbar />
    <main className="mainContent_container">

      <div>

          <table>
            <thead>
              <tr>
                <th className="mainContent_items-table-header">Name</th>
                <th className="mainContent_items-table-header">Symbol</th>
                <th className="mainContent_items-table-header">Price USD</th>
                <th className="mainContent_items-table-header"></th>
              </tr>
            </thead>
            <tbody> {
            details ?
            details.data.map(item => (

              <tr className="mainContent_firts-item-row" key={item.id}>
                <th className="mainContent_firts-item-name-row">{item.name}</th>
                <td className="mainContent_tbody-items ">{item.symbol}</td>
                <td className="mainContent_tbody-items ">$ {item.price_usd}</td>
                <td className="mainContent_tbody-items ">
                  <button className="mainContent-table-details-button" id={item.id} onClick={(e) => handleOnClick(e)}>
                    Details
                  </button>
                </td>
              </tr>
            ))
            : <Spinner/>} </tbody>
          </table>
      </div>
    </main>
    </>
  );
};

export default MainContent;
