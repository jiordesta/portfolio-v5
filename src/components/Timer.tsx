import { useEffect, useState } from 'react'

export default function Timer() {
    const [seconds, setSeconds] = useState<number>(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return (
      <div className="flex justify-end cursor-default">
        <div className="bg-color2 bg-opacity-25 py-1 px-2 rounded-full drop-shadow-lg">
          <p>
            {hours.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {remainingSeconds.toString().padStart(2, "0")}
          </p>
        </div>
      </div>
    );
}
