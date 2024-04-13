import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";
import TradingViewWidget from "../components/TradingViewWidget.jsx";

export function IndexPage() {
  const startContent = (
    <div className="icon">
      <img src="/ticon.png" alt="logo" />
      <h1>SoftHand</h1>
    </div>
  );

  const centerConten = (
    <div className="flex">
      <div className="font-bold mr-2 cursor-pointer">Рынки</div>
      <div className="font-bold mr-2 cursor-pointer">Новости</div>
      <div className="font-bold cursor-pointer">Брокеры</div>
    </div>
  );

  const endContent = (
    <>
      <div className="flex align-items-center gap-2">
        <Avatar icon="pi pi-user" shape="circle" />
        <span className="font-bold">Sherhan</span>
      </div>
    </>
  );

  return (
    <div className="card">
      <Toolbar
        start={startContent}
        center={centerConten}
        end={endContent}
        className="border-round-3xl my-3"
      />

      <h2 className="text-center">Рынки</h2>

      <div className="w-full flex justify-content-center align-content-center border-round-3xl">
        <TradingViewWidget />
      </div>
    </div>
  );
}
