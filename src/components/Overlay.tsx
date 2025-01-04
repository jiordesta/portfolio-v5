import Header from "./Header";
import Navigator from "./Navigator";

export default function Overlay() {
  return (
    <div className="w-full h-screen fixed p-1 md:p-2 lg:p-[1rem]">
        <Header/>
        <Navigator/>
    </div>
  )
}
