import { Carousel } from "flowbite-react";
import { useRef, useState } from "react";
import Slide3 from "./imgs/slide3img.jpg";
function App() {
  const [slideUp, setSlideUp] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const handleClick = () => {
    setSlideUp(!slideUp);
    setTimeout(() => {
      setShowCarousel(!showCarousel);
    }, 300);
  };

  const audioSrc = [
    "https://sndup.net/722jf/d",
    "https://sndup.net/2nv62/d",
    "https://sndup.net/zfyb9/d",
    "https://sndup.net/6n8cj/d",
    "https://sndup.net/y837z/d",
    "https://sndup.net/t39pm/d",
    "https://sndup.net/nyqmc/d",
    "https://sndup.net/gym2k/d",
  ];

  const handleSlideChange = (currentSlide: number) => {
    audioref.current!.src = audioSrc[currentSlide];
  };
  const audioref = useRef<HTMLAudioElement | null>(null);

  const Mycarousel = () => {
    return (
      <div className="z-1 fade-in size-full">
        {/* <audio loop autoPlay>
          <source src="music/slide1.mp3" />
          Your browser does not support the audio element.
        </audio> */}
        <Carousel slide={false} className="" onSlideChange={handleSlideChange}>
          <div
            className={`slide-1 flex h-full items-center justify-end dark:text-white`}
          >
            <div className="font-custom font-shadow w-[30%] pr-24 text-6xl font-semibold text-white">
              <h2 className="">
                Firstly, you are the cutest, sweetest and the best thing that
                ever happened to me
              </h2>

              <audio
                ref={audioref}
                src="https://sndup.net/722jf/d"
                loop
                autoPlay
              ></audio>
            </div>
          </div>
          <div
            className={`slide-2 flex h-full items-start justify-start bg-gray-400 dark:bg-gray-700 dark:text-white`}
          >
            <div className="font-custom font-shadow w-1/2 pl-16 pt-8 text-4xl font-semibold text-white">
              <h2 className="">
                Secondly, tujhse zyada PAGAL BHANDI BEWAKOOF aurat aaj tak nahi
                dekhi maine. I mean who tf puts diljit and techno in one
                playlist
              </h2>
            </div>
          </div>
          <div
            className={`slide-3 flex h-full items-center justify-between bg-gray-400 dark:bg-gray-700 dark:text-white`}
          >
            <div className="z-10 pl-24 pt-24">
              <img src={Slide3} alt="" className="h-[160px] w-[400px]" />
            </div>
            <div className="font-custom font-shadow h-full w-1/2 pr-14 pt-6 text-3xl font-semibold text-white">
              <h2 className="">You are the seepiest person I have ever seen</h2>
              <h2>(I come in second place)</h2>
              <h2>Miss watching you sleep :((</h2>
            </div>
          </div>
          <div
            className={`slide-4 flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white`}
          >
            <h2 className="font-custom font-shadow text-3xl font-semibold text-white">
              Greatestest selfie taker to ever exist🙏
            </h2>
          </div>
          <div
            className={`slide-5 flex h-full items-end justify-end bg-gray-400 pb-10 dark:bg-gray-700 dark:text-white`}
          >
            <div className="w-2/5">
              <h2 className="font-custom font-shadow text-3xl font-semibold text-white">
                You already know that I can't imagine manipal without you. Thank
                you for making this place better and for always calling me out
                when I'm being a chutiya
              </h2>
            </div>
          </div>
          <div
            className={`slide-6 flex h-full items-center justify-start bg-gray-400 pl-14 dark:bg-gray-700 dark:text-white`}
          >
            <div className="w-1/4">
              <h2 className="font-custom font-shadow text-3xl font-semibold text-white">
                Sidenote: I hate it when you call yourself uggy, when you are so
                fucking cute😡😡
              </h2>
            </div>
          </div>
          <div
            className={`slide-7 flex h-full items-center justify-center bg-gray-400 pl-14 dark:bg-gray-700 dark:text-white`}
          >
            <div className="flex h-full w-1/4 flex-col justify-between py-4">
              <h2 className="font-custom font-shadow text-3xl font-semibold text-white">
                Thank you for never giving up on us and sticking with it when
                things looked shit
              </h2>
              <h2 className="font-custom font-shadow text-3xl font-semibold text-white">
                You are not only an amazing gf but also a great friend, sister
                and daughter
              </h2>
            </div>
          </div>
          <div
            className={`slide-8 flex h-full items-end justify-start bg-gray-400 p-14 dark:bg-gray-700 dark:text-white`}
          >
            <div className="w-1/3">
              <h2 className="font-custom font-shadow text-3xl font-semibold text-white">
                Bas hogaya.
              </h2>
              <h2 className="font-custom font-shadow text-3xl font-semibold text-white">
                Happy birthday again aur ab heavy bhandi karenge fsdfbsdjh
              </h2>
            </div>
          </div>
        </Carousel>
      </div>
    );
  };

  return (
    <div className="h-screen ">
      <div
        className={`z-100 absolute size-full bg-red-500 ${slideUp && "slide-out-top"} `}
        onClick={() => handleClick()}
      >
        <div className="flex h-full items-center justify-center">
          <div className="font-custom flex cursor-pointer flex-col gap-8 px-12 text-center text-5xl font-semibold text-white">
            <h1 className="text-6xl uppercase">Happy birthday siman</h1>
            <h1>I love you sm</h1>
            <h1>
              I tried to compensate for giving a boring gift by making this as
              this is all I know how to do
            </h1>
            <h1>Click to get started</h1>
            <h1 className="text-xl">
              (watch on default zoom and with volume on)
            </h1>
          </div>
        </div>
      </div>
      <div className="z-0 h-full">{showCarousel && <Mycarousel />}</div>
    </div>
  );
}

export default App;
