import { resume } from '../data/urls';

export default function ResumeBtn() {

    return (
      <button
        className="p-1 flex items-center rounded-full drop-shadow-lg bg-color2 bg-opacity-25"
        onClick={() => {
          window.open(`${resume}`, "_blank");
        }}
      >
        <div>
          <img
            src="/icons/resume.svg"
            className="p-1 bg-color3 rounded-full glowBox"
            width={35}
            alt=""
          />
        </div>
        <h1 className="ps-2 pe-4 glowText">resume</h1>
      </button>
    );
}
