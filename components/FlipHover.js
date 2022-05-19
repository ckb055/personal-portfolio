function FrontOfCard({frontImage}) {
    return (
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-700 transition-all duration-100 delay-200 z-20 hover:opacity-0">
        <img
                src={frontImage}
                className="h-20 w-20 mx-4 my-4"
            />
        </div>
    );
}

function BackOfCard({backText}) {
    return (
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all z-10 card-back">
        {backText}
        </div>
    );
}
 /*className="m-1 relative w-36 h-30 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card"*/
export default function FlipHover({frontImage, backText}) {
    return (
        <div className="m-1 overflow-hidden rounded-2xl h-20 w-20 mx-4 my-4 text-white relative cursor-pointer transition-all duration-700 card">
        <FrontOfCard frontImage={frontImage}/>
        <BackOfCard backText={backText}/>
        </div>
    );
}