import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { INDEX_PAGE, LOGIN_PAGE } from "../../constants/pages.js";
import UsersApi from "../../api/users.api.js";
import { saveToken, saveUser } from "../../store/slices/user.slice.js";
import { useState } from "react";

export function RegistrationPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const onRegisterSubmit = async () => {
    try {
      const userToken = await UsersApi.register(
        firstName,
        lastName,
        email,
        password
      );

      dispatch(saveToken(userToken.token));

      const userInfo = await UsersApi.getMeInfo();

      dispatch(saveUser(userInfo));

      navigate(INDEX_PAGE);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex align-items-center justify-content-center h-screen">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">
            Добро пожаловать
          </div>
          <span className="text-600 font-medium line-height-3">
            У меня уже есть аккаунт, хочу зайти!
          </span>
          <a
            className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigate(LOGIN_PAGE);
            }}
          >
            Зайти!
          </a>
        </div>

        <label htmlFor="firstName" className="block text-900 font-medium mb-2">
          Имя
        </label>

        <InputText
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Ваше имя"
          className="w-full mb-3"
        />

        <label htmlFor="lastName" className="block text-900 font-medium mb-2">
          Фамилия
        </label>

        <InputText
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Ваш фамилия"
          className="w-full mb-3"
        />

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Почта
          </label>

          <InputText
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Адресс почты"
            className="w-full mb-3"
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Пароль
          </label>

          <InputText
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль, например: 123456"
            className="w-full mb-3"
          />

          <Button
            label="Зарегистрироваться"
            icon="pi pi-user"
            className="w-full"
            onClick={onRegisterSubmit}
          />
        </div>
      </div>
    </div>
  );
}
