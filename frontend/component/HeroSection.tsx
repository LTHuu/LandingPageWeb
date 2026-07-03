'use client'
import Image from "next/image";
import ProductImg from "../img/HeathwatchFITVII.svg"
import "../style/HeroSection.css"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// Hình ảnh sản phẩm sắc nét, slogan nhấn mạnh lợi ích (ví dụ: "Sức khỏe trong tầm tay"), và nút CTA rõ ràng (ví dụ: "Tìm hiểu thêm" hoặc "Mua ngay").

export default function HeroSection() {
    const rating = 4.5;

    const renderStar = () => {
        const stars = []

        for(let i =1;i <= 5;i++){
            if(rating>=i){
                stars.push(<FaStar className="Star" key={i} />);
            } else if(rating>=i - 0.5) {
                stars.push(<FaStarHalfAlt className="Star" key={i} />);
            } else {
                stars.push(<FaRegStar className="Star" key={i} />);
            }
        }

        return stars;
    };

    return (
        <>
        <div className="heroSection w-full pt-10 flex justify-center">
            <div className="topSection flex justify-center items-center">
                <div className="ProductInfo flex-2 flex-col items-center">
                    <div>
                        <h1 className="productName TextColor">FITVII Health & Fitness Tracker</h1>
                    <h2 className="proShort TextColor">Track your heart rate and sleep quality</h2>
                    <h2 className="proShort TextColor">Monitor daily activity anytime, anywhere</h2>
                    </div>
                    <div className="flex">
                        <div  className="productPrice">
                            <div className="price">
                                <p className="oldPrice">7.000.000 vnđ</p>
                                <p className="newPrice">5.499.999 vnđ</p>
                            </div>
                            <p className="sale">Sale: 30%</p>
                        </div>
                        <button className="BuyButton"> Buy now! </button>
                    </div>
                    <div className="productRate flex flex-initial">
                        <div className="flex-1">
                            <p className="TotalRate text-3xl  TextColor">12,6K</p>
                            <p className="TotalRate font-bold  TextColor">Lượt đánh giá</p>
                        </div>
                        <div className="flex-1">
                            <p className="RatePositive text-3xl TextColor">Hơn 9,8K</p>
                            <p className="RatePositive font-bold TextColor">Lượt đánh tích cực</p>
                        </div>
                    </div>
                    <div className="RateStar flex flex-row mt-4">
                        <div className="flex">{renderStar()}<p>{rating}</p></div>
                        
                        <div className="text-[15px]">
                            <p className="ratingText">Đánh giá trung bình của người dùng.</p>
                        </div>
                    </div>
                </div>
                <Image className="ProductImg flex-1" src={ProductImg} alt="" width={10} height={10} />
            </div>
        </div>
        </>
    );
}