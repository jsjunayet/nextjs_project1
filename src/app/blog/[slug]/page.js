

const page = ({params}) => {
    return (
        <div>
            <h1>
                this is dynamic page:{params.slug}
            </h1>
        </div>
    );
};

export default page;