'use client'
import "../style/Specification.css"

export default function Sepcification() {

    const specifiItem = [
        {
            spec: "Màn hình",
            info: [
                "AMOLED 1.85 inch",
                "Độ phân giải HD",
                "Cảm ứng toàn màn hình"
            ]
        },
        {
            spec: "Pin",
            info: [
                "Dung lượng 400mAh",
                "Sử dụng tối đa 7 ngày",
                "Sạc nam châm nhanh"
            ]
        },
        {
            spec: "Cảm biến sức khỏe",
            info: [
                "Đo nhịp tim 24/7",
                "Theo dõi SpO2",
                "Đo nhiệt độ cơ thể"
            ]
        },
        {
            spec: "Theo dõi giấc ngủ",
            info: [
                "Phân tích ngủ sâu",
                "Phân tích ngủ nhẹ",
                "Đưa ra gợi ý cải thiện"
            ]
        },
        {
            spec: "Định vị GPS",
            info: [
                "GPS độc lập tích hợp",
                "Theo dõi vị trí thời gian thực",
                "Chia sẻ vị trí với gia đình"
            ]
        },
        {
            spec: "Kết nối",
            info: [
                "Bluetooth 5.3",
                "Tương thích Android",
                "Tương thích iOS"
            ]
        },
        {
            spec: "Khả năng chống nước",
            info: [
                "Chuẩn IP68",
                "Chống bụi hiệu quả",
                "Kháng nước sinh hoạt"
            ]
        },
        {
            spec: "Tính năng an toàn",
            info: [
                "Cảnh báo bất thường",
                "Gửi tín hiệu SOS",
                "Thông báo khẩn cấp"
            ]
        }
    ];

    return (
        <>
            <div className="w-full">
                <div className="SpecifiBg flex flex-col justify-center items-center">
                    <h1 className="Title">Thông số kỹ thuật</h1>
                    <div className="SpecifiMain">
                            {specifiItem.map((item, index)=>{
                            return(
                                <div className="SpecifiItem" key={index}>
                                    <div className="spec">{item.spec}</div>
                                    <div className="Inf">
                                        {item.info.map((detail,i)=>{
                                            return(
                                                <p key={i}>✓ {detail}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}