

const AllCars = ({car}) => {
    const{brandName,image}=car
    console.log(brandName)
    return (
        <div>
            <img src={image} alt="" />
            
        </div>
    );
};

export default AllCars;