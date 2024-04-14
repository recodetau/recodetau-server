import TradingViewWidget from "../../components/TradingViewWidget.jsx";

export function IndexPage() {
  return (
    <>
      <h2 className="text-center">Рынки</h2>

      <p className="text-center">
        Страница инвестиций открывает двери в мир возможностей роста и прибыли.
        Здесь вы можете ознакомиться с акциями других компаний, исследовать их
        производительность и потенциал для вашего портфеля инвестиций. Мы
        предоставляем информацию о самых актуальных и перспективных
        инвестиционных возможностях, чтобы помочь вам принимать осознанные
        решения.
      </p>

      <div className="w-full flex justify-content-center align-content-center border-round-3xl">
        <TradingViewWidget />
      </div>
    </>
  );
}
