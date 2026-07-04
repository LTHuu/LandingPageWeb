'use client'
import "../style/Feature.css"
import Image from "next/image";
import HeartMonitor from "../img/HeartMonitor.svg"
import SleepAnalys from "../img/sleepAnalys.svg"
import Temperature from "../img/Temperature.svg"
import GPS from "../img/HeartMonitor.svg"
import { useRef } from "react";

// Sử dụng các icon (SVG) để liệt kê thông số kỹ thuật y tế (đo SpO2, theo dõi huyết áp, cảnh báo té ngã).

export default function Feature() {
    const heartRef = useRef<HTMLDivElement>(null);
    const sleepRef = useRef<HTMLDivElement>(null);
    const tempRef = useRef<HTMLDivElement>(null);
    const gpsRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (
        ref: React.RefObject<HTMLDivElement | null>
        ) => {
        ref.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <>
        <div className="w-full flex flex-col items-center pb-10">
            {/* <p className="shortFeatureTitle">Chức năng nổi bật</p> */}
            <div className="shortFeatureMain flex justify-between mt-10">
                <div title="Heart Monitor" className="shortFeature Heart" onClick={() => scrollToSection(heartRef)}>
                    <h1 className="shortIcon">❤️</h1>
                    <h2>Heart Monitoring</h2>
                    <h2>Trach heart rate</h2>
                    <h2>in real time</h2>
                </div>
                <div title="Sleep Analysis" className="shortFeature Sleep" onClick={() => scrollToSection(sleepRef)}>
                    <h1 className="shortIcon">😴</h1>
                    <h2>Sleep Analysis</h2>
                    <h2>Monitor sleep cycles</h2>
                    <h2>for better recovery</h2>
                </div>
                <div title="Temperature check" className="shortFeature Temperature" onClick={() => scrollToSection(tempRef)}>
                    <h1 className="shortIcon">🌡️</h1>
                    <h2>Temperature Check</h2>
                    <h2>Measure body temp</h2>
                    <h2>instantly</h2>
                </div>
                <div title="GPS" className="shortFeature GPS" onClick={() => scrollToSection(gpsRef)}>
                    <h1 className="shortIcon">📍</h1>
                    <h2>GPS Emergency Alert</h2>
                    <h2>Share live location</h2>
                    <h2>with family members</h2>
                </div>
            </div>
            <h1 className="shortFeatureTitle">Thông tin chi tiết</h1>
        <div className="detailFeatureMain flex flex-col mt-10">
            <div>
                <div ref={heartRef} className="detailFeature textLeft Heart flex-row flex justify-between">
                    <div className="detailText">
                        <h1>❤️ Heart Monitoring</h1>
                        <h1>✓ Theo dõi nhịp tim liên tục 24/7  </h1>
                        <h1>✓ Công nghệ cảm biến PPG thế hệ mới</h1>
                        <h1>✓ AI lọc nhiễu khi vận động mạnh</h1>
                        <h1>✓ Phát hiện bất thường và cảnh báo sớm</h1>
                    </div>
                    <div className="detailImg">
                        <Image className="detailImg" src={HeartMonitor} alt="HearMonitor" />
                    </div>
                </div>
                <div ref={sleepRef} className="detailFeature Sleep flex-row flex justify-between">
                    <div className="detailImg">
                        <Image className="detailImg" src={SleepAnalys} alt="SleepAnalys" />
                    </div>
                    <div className="detailText">
                        <h1>😴 Sleep Analysis</h1>
                        <h1>✓ Theo dõi chu kỳ ngủ sâu và ngủ nhẹ</h1>
                        <h1>✓ Phân tích chất lượng giấc ngủ tự động</h1>
                        <h1>✓ Đưa ra gợi ý cải thiện cá nhân hóa</h1>
                        <h1>✓ Giúp bạn thức dậy với trạng thái tốt hơn</h1>
                    </div>
                </div>
                <div ref={tempRef} className="detailFeature textLeft Temperature flex-row flex justify-between">
                    <div className="detailText">
                        <h1>🌡️ Temperature Check</h1>
                        <h1>✓ Theo dõi nhiệt độ cơ thể liên tục</h1>
                        <h1>✓ Cảm biến nhiệt độ độ nhạy cao</h1>
                        <h1>✓ Phát hiện biến động bất thường sớm</h1>
                        <h1>✓ Hỗ trợ theo dõi sức khỏe hằng ngày</h1>
                    </div>
                    <div className="detailImg">
                        <Image className="detailImg" src={Temperature} alt="Temperature" />
                    </div>
                </div>
                <div ref={gpsRef} className="detailFeature GPS flex-row flex justify-between">
                    <div className="detailImg">
                        <Image className="detailImg" src={GPS} alt="GPS" />
                    </div>
                    <div className="detailText">
                        <h1>📍 GPS Emergency Alert</h1>
                        <h1>✓ Định vị chính xác với GPS độc lập</h1>
                        <h1>✓ Chia sẻ vị trí trực tiếp với người thân</h1>
                        <h1>✓ Theo dõi hành trình theo thời gian thực</h1>
                        <h1>✓ Hỗ trợ xử lý nhanh trong tình huống khẩn cấp</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
            
        </>
    );
}