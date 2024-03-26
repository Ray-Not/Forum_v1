import React, { useState, useEffect } from 'react'
import DonationList from './DonationList'
import axios from 'axios';

function ServerInfoV1(props) {
  const [serverData, setServerData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("Effect выполнен");
    axios.get('http://localhost:8000/api/server/info/')
    .then(response => {
      setServerData(response.data.servers);
      setLoading(false);
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
      setLoading(false);
    });
  }, [])
  

  return (
    <>
      <div className='row mx-auto d-flex justify-content-center align-items-center mt-5'>
        <div className='col-8 text-center fs-1'>Наши сервера</div>
      </div>
      <div className='row mx-auto d-flex justify-content-center align-items-center mt-5'>
        <div className='col-10 border border-dark fs-5 rounded bg-light mb-5'>
          {loading ? (
            <div className="row d-flex justify-content-center align-items-center mt-3">
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="text-center mt-3">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Название сервера</th>
                    <th scope="col">IP адрес</th>
                    <th scope="col">Текущая карта</th>
                    <th scope="col">Игроки</th>
                  </tr>
                </thead>
                <tbody>
                  {serverData.length > 0 ? (
                    serverData.map((server, index) => {
                      if (server.server_info.server_name !== '') {
                        return (
                          <tr key={server.server_info.address}>
                            <td>{server.server_info.server_name}</td>
                            <td>{server.server_info.address}</td>
                            <td>{server.server_info.map_name}</td>
                            <td>
                              {server.server_info.player_count}/{server.server_info.max_players}
                              <div className="progress mt-2">
                                <div
                                  className="progress-bar-striped progress-bar-animated text-bg-danger"
                                  role="progressbar"
                                  style={{
                                    width: `${(server.server_info.player_count / server.server_info.max_players) * 100}%`
                                  }}
                                  aria-valuenow={server.server_info.player_count}
                                  aria-valuemin="0"
                                  aria-valuemax={server.server_info.max_players}
                                ></div>
                              </div>
                            </td>
                          </tr>
                        )
                      } else {
                        return (
                          <tr key={index}>
                            <td colSpan="4" className='table-danger'>Ошибка получения данных с этого сервера</td>
                          </tr>
                        )
                      }
                    })
                  ) : (
                    <tr>
                      <td colSpan="4" className='text-center table-danger'>
                        Нет данных о серверах
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <DonationList servers={serverData} />
    </>
  )
}

export default ServerInfoV1
