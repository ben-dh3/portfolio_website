const Marquee = ({ message }: { message: string }) => {
    return (
        <div className="text-9xl overflow-x-hidden">
            <div className="p-2 marquee whitespace-nowrap">
                <span className="mx-4">{message}</span>
                <span className="mx-4">{message}</span>
                <span className="mx-4">{message}</span>
                <span className="mx-4">{message}</span>
                <span className="mx-4">{message}</span>
            </div>
        </div>
    )  
  };
  
  export default Marquee;