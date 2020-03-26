import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

function Profile() {
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const [incidents, setIncidents ] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then( response => {
      setIncidents(response.data)
    })
  }, [ongId]);

  async function handleDelete(id){
    try {
      await api.delete(`incidents/${id}`, {
        headers:{
          Authorization: ongId,          
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    }catch(e){
      alert('Erro ao deletar o caso!')      
    }
  }

  function handleLogout(){
    localStorage.clear(); 
    history.push('/');
 }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vindo, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incidents => (
          <li key={incidents.id}>
            <strong>Caso:</strong>
            <p>{incidents.title}</p>

            <strong>Descrição</strong>
            <p>{incidents.description}</p>

            <strong>Valor</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incidents.value)}</p>
            <button type="button" onClick={() => {handleDelete(incidents.id)}}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;