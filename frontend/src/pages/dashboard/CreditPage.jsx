import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import CreditApi from "../../api/credit.api.js";
import { FaMoneyBills } from "react-icons/fa6";

export function CreditPage() {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    (async () => {
      const allCredits = await CreditApi.getCreditSchemesByType(1);

      setCredits(allCredits);
    })();
  }, []);

  return (
    <>
      <h2 className="text-center">Кредиты</h2>

      <p className="text-center">
        Независимо от того, нужен вам кредит на расширение бизнеса,
        финансирование крупной покупки или погашение долгов, у нас есть гибкие
        кредитные решения, которые подходят именно вам. Мы предоставляем
        разнообразные виды кредитов с конкурентными ставками и условиями, чтобы
        помочь вам реализовать ваши планы.
      </p>

      {credits.map((credit) => (
        <div
          key={credit.id}
          className="flex justify-content-between align-items-center surface-card p-4 border-round border-solid border-1 border-200 cursor-pointer mb-3"
        >
          <div className="flex align-items-center">
            <FaMoneyBills size={27} className="mr-4" color={"#10b981"} />
            <span className="font-semibold">{credit.amount} тг.</span>
          </div>

          <div className="flex align-items-center">
            <span className="mr-3 font-semibold">{credit.percent}%</span>

            <span className="mr-3 font-semibold">{credit.mouths} месяцев</span>

            <Button label="Запрос" />
          </div>
        </div>
      ))}
    </>
  );
}
