import Image from "next/image";
import downloadImage from "../../public/images/download.png";

type Props = {
  title: string;
  story: string;
  prompt: string;
  images: string[];
  captions: string[];
  _id: string;
  createdBy: string;
};

const Card = (props: Props) => {
  const { title, story, prompt, images, captions, _id, createdBy } = props;

  return (
    <>
      <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
        <div style={{ height: "400px", width: "500px" }}>
          <Image
            src={`http://localhost:8000/uploads/${images[0]}`}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
          <p className="text-[#fff] text-md overflow-y-auto font-semibold">{title}</p>
          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              {/* <div className="w-7 h-7 rounded-full object-cover flex justify-center items-center text-[#fff] text-xs font-bold">
                {title}
              </div> */}
              <p className="text-[#fff] text-sm">By {createdBy}</p>
            </div>
            <button
              type="button"
              onClick={() => {}}
              className="outline-none bg-transparent border-none"
            >
              <Image
                src={downloadImage}
                alt="download"
                width={24}
                height={24}
                className="color-[#fff]"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
