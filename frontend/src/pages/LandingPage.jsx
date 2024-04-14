import { useNavigate } from "react-router-dom";
import { MdArrowOutward, MdEmail, MdWork } from "react-icons/md";
import { FaLocationDot, FaMoneyBills } from "react-icons/fa6";
import { ImDropbox } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

import { INDEX_PAGE, LOGIN_PAGE, REGISTER_PAGE } from "../constants/pages.js";

export function LandingPage() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  return (
    <div className="landing">
      <div className="container">
        <header className="landing-header">
          <div className="icon">
            <img src="/ticon.png" alt="logo" />
            <h1>Soft Hand</h1>
          </div>

          <div className="auth-buttons">
            {user === null ? (
              <>
                <button
                  className="landing-empty-button"
                  onClick={() => {
                    navigate(REGISTER_PAGE);
                  }}
                >
                  Регистрация
                </button>
                <button
                  className="landing-button"
                  onClick={() => {
                    navigate(LOGIN_PAGE);
                  }}
                >
                  Авторизоваться
                </button>
              </>
            ) : (
              <button
                className="landing-empty-button"
                onClick={() => navigate(INDEX_PAGE)}
              >
                В кабинет
              </button>
            )}
          </div>
        </header>

        <section className="landing-hero">
          <h2>
            Добро пожаловать в <span className="landing-green">Soft Hand</span>!{" "}
            <br />
            Расширяем возможности вашего финансового пути
          </h2>

          <p>
            Наша миссия в <span className="landing-green">Soft Hand</span> —
            предоставить вам инновационные и гибкие финансовые решения, которые
            помогут вашему бизнесу достичь новых высот. Мы понимаем, что каждый
            бизнес уникален, и поэтому мы стремимся предложить
            персонализированные услуги, отвечающие вашим конкретным потребностям
            и целям. С Soft Hand вы получаете не просто финансового партнера, а
            команду профессионалов, готовых сопровождать вас на каждом этапе
            вашего финансового пути. Наше сотрудничество - это не просто деловые
            отношения, это партнерство, основанное на доверии, прозрачности и
            взаимном успехе. Присоединяйтесь к Soft Hand уже сегодня и откройте
            новые перспективы для вашего бизнеса!
          </p>

          <button
            className="landing-button"
            onClick={() => navigate(INDEX_PAGE)}
          >
            Открыт аккаунт
          </button>
        </section>

        <section className="landing-services">
          <h3 className="landing-title">
            Наши <span className="landing-green">услуги</span>
          </h3>

          <p className="landing-text">
            Откройте для себя ряд комплексных и настраиваемых банковских
            продуктов YourBank, разработанных с учетом ваших уникальных
            финансовых потребностей и стремлений.
          </p>

          <div className="services-items">
            <div>
              <div className="icon">
                <div>
                  <div>
                    <MdWork size={27} />
                  </div>
                </div>
              </div>

              <h4>Акций</h4>

              <p className="landing-text">
                Инвестируйте в ваш бизнес и развивайтесь вместе с нами. Наша
                платформа предлагает доступ к акциям вашей компании, позволяя
                вам привлечь дополнительные инвестиции и расширить ваш бизнесный
                потенциал.
              </p>
            </div>

            <div>
              <div className="icon">
                <div>
                  <div>
                    <ImDropbox size={27} />
                  </div>
                </div>
              </div>

              <h4>Лизинг</h4>

              <p className="landing-text">
                Наша программа лизинга предоставляет вам доступ к необходимому
                оборудованию и технологиям без необходимости крупных капитальных
                вложений. Это отличный способ улучшить вашу производственную
                базу без значительных финансовых затрат.
              </p>
            </div>

            <div>
              <div className="icon">
                <div>
                  <div>
                    <FaMoneyBills size={27} />
                  </div>
                </div>
              </div>

              <h4>Кредит</h4>

              <p className="landing-text">
                Мы предлагаем широкий спектр кредитных продуктов, адаптированных
                под потребности вашего бизнеса. Независимо от того, нужны ли вам
                средства на расширение бизнеса или приобретение недвижимости, мы
                поможем вам найти оптимальное финансовое решение.
              </p>
            </div>
          </div>
        </section>

        <section className="landing-directions">
          <h3 className="landing-title">
            Наши <span className="landing-green">направления</span>
          </h3>

          <p className="landing-text">
            Воспользуйтесь множеством мощных функций вашего бизнеса, безопасными
            транзакциями и персонализированной финансовой информацией, которые
            призваны улучшить качество вашего банковского обслуживания.
          </p>

          <div className="directions-items">
            <div>
              <MdArrowOutward className="icon" />

              <h4 className="landing-green">
                Индивидуальное предпринимательство
              </h4>

              <p className="landing-text">
                Индивидуальное предпринимательство - это ваша свобода и
                уникальность. Мы, компания{" "}
                <span className="landing-green">Soft Hand</span>, ценим
                индивидуальность и гибкость бизнеса. Наша цель - помочь вашему
                предпринимательству стать еще более эффективным. Доверьтесь нам
                для инновационных решений и успеха вашего бизнеса.
              </p>
            </div>

            <div>
              <MdArrowOutward className="icon" />

              <h4 className="landing-green">ТОО</h4>

              <p className="landing-text">
                "Товарищество с ограниченной ответственностью (ТОО) - ваш
                партнер в стабильном бизнесе. Мы -{" "}
                <span className="landing-green">Soft Hand</span>, готовы помочь
                вашему предприятию достичь успеха. Доверьтесь нам для
                инновационных и профессиональных решений."
              </p>
            </div>

            <div>
              <MdArrowOutward className="icon" />

              <h4 className="landing-green">Акционерское общество</h4>

              <p className="landing-text">
                С нашими инновационными решениями ваше Акционерское общество
                (АО) станет ещё более эффективным и конкурентоспособным. Мы
                предлагаем профессиональное сопровождение и поддержку, чтобы ваш
                бизнес мог добиться максимальных результатов в своей отрасли.
                Доверьтесь нам для достижения новых высот вместе
              </p>
            </div>
          </div>
        </section>

        <footer className="landing-footer">
          <div className="icon">
            <img src="/ticon.png" alt="logo" />
            <h1>Soft Hand</h1>
          </div>

          <div className="socials">
            <div>
              <MdEmail size={20} />
              <p>softhand@gmail.com</p>
            </div>

            <div>
              <FaPhoneAlt size={20} />
              <p>+7 (707) 325 86 93</p>
            </div>

            <div>
              <FaLocationDot size={20} />
              <p>Satbayev University</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
