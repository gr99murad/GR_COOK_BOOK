
const Heading = ({title, subtitle}) => {
    return (
        <div className="text-center my-7">
            <h1 className="text-2xl font-thin md:text-5xl">{title}</h1>
            <p className="mt-5 font-thin">{subtitle}</p>
        </div>
    );
};

export default Heading;