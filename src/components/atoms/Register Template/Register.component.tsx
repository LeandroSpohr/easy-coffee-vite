import React from 'react'
import Register from './Register.style'

type RegisterComponentInterface = {
  children?: JSX.Element | JSX.Element[]
};

const RegisterComponent: React.FC<
  RegisterComponentInterface
> = ({
  children,
}) => (
  <Register>
    <h2> Registre-se </h2>
      <div className="form-body">
        <div className="cpf">
          <label className="form__label" htmlFor="CPF">Insira seu CPF </label>
          <input className="form__input" type="number" id="cpf" placeholder="cpf"/>
        </div>
      </div>
    {children}
  </Register>
)

export default RegisterComponent