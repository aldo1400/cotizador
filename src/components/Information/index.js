import React from 'react';
import Brand from 'components/Brand';
import IcClinic from 'images/ic_clinic.png'
import IcMoney from 'images/ic_money.png'
import IcShield from 'images/ic_shield.png'
import IcPhone from 'images/ic_phone.png'
import 'styles/info.scss'

function Information() {
    return (
        <div className="info--container">
            <Brand />
            <div className="info--info">
                <p className="info--title">Seguro de <span>Salud</span></p>
                <div className="info--item">
                    <img src={IcShield} alt="shield" /> <p>Compralo de manera fácil y rápida</p>
                </div>
                <div className="info--item">
                    <img src={IcPhone} alt="phone" /> <p>Cotiza y compra tu seguro 100% digital</p>
                </div>
                <div className="info--item">
                    <img src={IcMoney} alt="money" /> <p>Hasta S/.12 millones de cobertura anual</p>
                </div>
                <div className="info--item">
                    <img src={IcClinic} alt="hospital" /> <p>Más de 300 clínicas en todo el Perú</p>
                </div>
            </div>
            <div className="info--footer">
                <p>© 2020 RIMAC Seguros y Reaseguros</p>
            </div>
        </div>
    );
}

export default Information;