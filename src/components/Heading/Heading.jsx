
const Heading = ({ title, subTitle }) => {
    return (
        <div className="text-center my-12">
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className="my-4 text-muted-foreground">{subTitle}</p>
        </div>
    )
}

export default Heading;