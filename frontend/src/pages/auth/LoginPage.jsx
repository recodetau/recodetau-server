import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

import { INDEX_PAGE, REGISTER_PAGE } from "../../constants/pages.js";
import UsersApi from "../../api/users.api.js";
import { useDispatch } from "react-redux";
import { saveToken, saveUser } from "../../store/slices/user.slice.js";

export function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();

  const onLoginSubmit = async () => {
    try {
      const userToken = await UsersApi.login(email, password);

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
            С возвращением
          </div>
          <span className="text-600 font-medium line-height-3">
            У вас есть нет аккаунт?
          </span>
          <a
            className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigate(REGISTER_PAGE);
            }}
          >
            Создайте!
          </a>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Почта
          </label>
          <InputText
            id="email"
            type="email"
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
            placeholder="Пароль"
            className="w-full mb-3"
          />

          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
              <Checkbox
                id="rememberme"
                className="mr-2"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.checked)}
              />
              <label htmlFor="rememberme">Запомнить меня</label>
            </div>

            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
              Забыли пароль?
            </a>
          </div>

          <Button
            label="Зайти"
            icon="pi pi-user"
            className="w-full"
            onClick={onLoginSubmit}
          />
        </div>
      </div>
    </div>
  );
}
