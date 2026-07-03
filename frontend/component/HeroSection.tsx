'use client'
import Image from "next/image";
import ProductImg from "../img/HeathwatchFITVII.svg"
import "../style/HeroSection.css"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Rowdies } from "next/font/google";
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
        <div className="w-full pt-[40px] flex justify-center">
            <div className="topSection pt-20 flex justify-center items-center">
                <div className="ProductInfo flex-2 flex-col items-center">
                    <div>
                        <h1 className="productName">FITVII Health & Fitness Tracker</h1>
                    <h2 className="proShort">Track your heart rate and sleep quality</h2>
                    <h2 className="proShort">Monitor daily activity anytime, anywhere</h2>
                    </div>
                    <button className="BuyButton"> Buy now! </button>
                    <div className="productRate flex flex-initial">
                        <div className="flex-1">
                            <p className="TotalRate text-3xl">12,6K</p>
                            <p className="TotalRate font-bold">Lượt đánh giá</p>
                        </div>
                        <div className="flex-1">
                            <p className="RatePositive text-3xl">Hơn 9,8K</p>
                            <p className="RatePositive font-bold">Lượt đánh tích cực</p>
                        </div>
                    </div>
                    <div className="RateStar flex flex-row mt-4">
                        {renderStar()}
                        <p className="font-bold pl-5 pt-2 text-[15px]">
                            {rating} Đánh giá trung bình của người dùng.
                        </p>
                    </div>
                </div>
                <Image className="ProductImg flex-1" src={ProductImg} alt="" width={10} height={10} />
            </div>
        </div>
        </>
    );
}