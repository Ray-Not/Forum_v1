import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DonationForm(props) {
  const [formData, setFormData] = useState({
    privilege: '',
    username: '',
    password: '',
    selectedServer: ''
  })
  const [privilegeInfo, setPrivilegeInfo] = useState([])
  const [selectedPrivilege, setSelectedPrivilege] = useState(null)
  const { servers } = props

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    if (formData.selectedServer) {
      const [ip, port] = formData.selectedServer.split(':')
      axios.get(`http://localhost:8000/api/server/privilegue/${ip}/${port}/`)
        .then(response => {
          setPrivilegeInfo(response.data)
        })
        .catch(error => {
          console.error('Ошибка:', error)
        })
    }
  }, [formData.selectedServer])

  const handleSubmit = (event) => {
    event.preventDefault()
    const { username, password, selectedServer } = formData
    if (username && password && selectedServer) {
      axios.post(`http://localhost:8000/api/server/data/`, formData)
        .catch(error => {
          console.error('Ошибка:', error)
        })
    }
  }

  return (
    <div className='row'>
      <form onSubmit={handleSubmit}>
      <div className='col-12 d-flex justify-content-center align-items-center mt-4'>
          <div className="form-floating w-50">
            <select required className="form-select" id="choice_server" name="selectedServer" onChange={handleInputChange}>
              <option value="">Выберите сервер</option>
              {servers.map((server, index) => (
                server.server_info.server_name !== '' && (
                  <option key={server.server_info.address} value={server.server_info.address}>{server.server_info.server_name}</option>
                )
              ))}
            </select>
            <label htmlFor="choice_server">Выберите сервер</label>
          </div>
        </div>
        <div className='col-12 d-flex justify-content-center align-items-center mt-2'>
          <div className="form-floating w-50">
            <select required className="form-select" id="choice_priv" name="privilege" onChange={(event) => { handleInputChange(event); setSelectedPrivilege(event.target.value); }} disabled={!formData.selectedServer}>
              <option value="">Выберите привилегию</option>
              {privilegeInfo.map((privilege, index) => (
                <option key={index} value={privilege.privilege}>{privilege.privilegeTranslit}</option>
              ))}
            </select>
            <label htmlFor="choice_priv">Выбор привилегии</label>
          </div>
        </div>
        <div className='col-12 d-flex justify-content-center align-items-center mt-2'>
          <div className="form-floating w-50">
            <input required type="text" className="form-control" id="input_username" name="username" placeholder="nekruxa" onChange={handleInputChange}/>
            <label htmlFor="input_username">Введите ник</label>
          </div>
        </div>
        <div className='col-12 d-flex justify-content-center align-items-center mt-2'>
          <div className="form-floating w-50 mb-3">
            <input required type="text" className="form-control" id="input_password" name="password" placeholder="nekruxa" onChange={handleInputChange}/>
            <label htmlFor="input_password">Введите пароль</label>
          </div>
        </div>
        <div className='col-12 d-flex justify-content-center align-items-center mb-5'>
          <button type="submit" className="btn btn-outline-light btn-lg">Купить</button>
        </div>
      </form>
    </div>
  )
}

export default DonationForm
