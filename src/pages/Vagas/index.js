import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiClock } from 'react-icons/fi';
import { MdSchool } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

import logoimg from '../../assets/logo.png';
import './vagas.css';

export default function NewIncidents() {
  return (
    <div className="caixa">
      <section>
        <header>

          <img src={logoimg} alt="Be the Hero" />
          <h2>Nome da empresa</h2>
        </header>
      </section>

      <section>

        
          <h2>AUXILIAR OPERACIONAL FRENTE DE LOJA</h2>
          <div className="box">


            {/*grupo 1 inicio*/}
            <div className="sectionGroup">

              <div className="container">
                <div className="content">
                  <span>R$</span>
                </div>
                <div className="goup">
                  <p>Pretenção salarial</p>
                  <span>R$ 2000,00</span>
                </div>
              </div>

              <div className="container">
                <div className="content">
                  <FiUsers className="icon" size={25} color="#eee" />
                </div>
                <div className="goup">
                  <p>Número de vagas</p>
                  <span>2</span>
                </div>

              </div>
            </div>

            {/*grupo 1 fim*/}


            {/*grupo 2 inicio */}
            <div className="sectionGroup2">

              <div className="container">
                <div className="content">
                  <FiClock className="icon" size={25} color="#eee" />
                </div>
                <div className="goup">
                  <p>Horário de trabalho</p>
                  <span>de 08:00 às 18:00</span>
                </div>
              </div>

              <div className="container">
                <div className="content">
                  <MdSchool className="icon" size={25} color="#eee" />
                </div>
                <div className="goup">
                  <p>Escolaridade</p>
                  <span>Ensino médio completo</span>
                </div>
              </div>


              <div className="container">
                <div className="content">
                  <FaMapMarkerAlt className="icon" size={25} color="#eee" />
                </div>
                <div className="goup">
                  <p>Cidade</p>
                  <span>Leopoldina-MG</span>
                </div>
              </div>
            </div>

            {/*grupo 2 fim*/}
          </div>



        
      </section>

      <section>
        
          <h2>Descrição</h2>
          <div className="description">
            <p>Integer dui dolor, pellentesque in euismod in, ullamcorper nec diam. Ut sit amet risus euismod, ultrices nibh quis, tempus sem. Nam tristique mauris eu diam pellentesque, ac iaculis massa molestie. Nam id porttitor elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In bibendum ornare accumsan. Praesent condimentum eget erat et condimentum.</p>
          </div>
        
      </section>

      <section>
        
          <h2>Pré-requesitos</h2>
          <div className="description">
            <p>Integer dui dolor, pellentesque in euismod in, ullamcorper nec diam. Ut sit amet risus euismod, ultrices nibh quis, tempus sem. Nam tristique mauris eu diam pellentesque, ac iaculis massa molestie. Nam id porttitor elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In bibendum ornare accumsan. Praesent condimentum eget erat et condimentum.</p>
          </div>
        
      </section>

      <section>
        
          <h2>Benefícios</h2>
          <div className="description">
            <p>Integer dui dolor, pellentesque in euismod in, ullamcorper nec diam. Ut sit amet risus euismod, ultrices nibh quis, tempus sem. Nam tristique mauris eu diam pellentesque, ac iaculis massa molestie. Nam id porttitor elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In bibendum ornare accumsan. Praesent condimentum eget erat et condimentum.</p>
          </div>
        
      </section>

      <section>
        
          <h2>Observações</h2>
          <div className="description">
            <p>Integer dui dolor, pellentesque in euismod in, ullamcorper nec diam. Ut sit amet risus euismod, ultrices nibh quis, tempus sem. Nam tristique mauris eu diam pellentesque, ac iaculis massa molestie. Nam id porttitor elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In bibendum ornare accumsan. Praesent condimentum eget erat et condimentum.</p>
          </div>
        
      </section>
    </div>
  );
}
