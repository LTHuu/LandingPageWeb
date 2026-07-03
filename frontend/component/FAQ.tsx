'use client'
import "../style/FAQ.css"
import React, { useState } from "react";
import { FormEvent } from "react";
// Giải đáp các thắc mắc về độ chính xác của cảm biến, thời lượng pin, và khả năng tương thích với điện thoại.

export default function FAQ() {
    const faqItem=[
        {question:"Is the watch waterproof?",answer:"Yes, it features an IP68 rating, meaning it is dust-tight and water-resistant. You can wear it while washing your hands or during light workouts, but it is not recommended for diving or high-pressure water sports."},
        {question:"Can I share GPS location with family?",answer:"Yes, absolutely. The built-in independent GPS allows you to share your real-time location with family members through the connected mobile app for safety and peace of mind."},
        {question:"How accurate is heart rate tracking?",answer:"Our watch uses a next-generation PPG sensor with advanced AI algorithms to filter out noise during movement, ensuring high accuracy throughout your daily activities."},
        {question:"Does it work while sleeping?",answer:"Yes, it performs continuous monitoring throughout the night. It analyzes your sleep cycles (deep sleep, light sleep) and provides actionable insights to help you improve your recovery."},
        {question:"How long does the battery last?",answer:"With daily usage and continuous monitoring enabled, the battery typically lasts up to 7 days on a single charge. Usage patterns may vary based on GPS and sensor activity."},
        {question:"What are the main health features of this smartwatch?",answer:"It offers 24/7 heart rate monitoring, sleep cycle analysis, blood oxygen (SpO2) tracking, and an emergency SOS function."},
        {question:"How accurate is the heart rate sensor?",answer:"It uses a new generation PPG sensor combined with AI noise cancellation to ensure high accuracy, even during intense exercise."},
        {question:"Can this watch help me improve my sleep quality?",answer:"Yes, it tracks your sleep stages and provides personalized suggestions to help you recover better."},
        {question:"Is the GPS tracking reliable for my child?",answer:"Absolutely. It features an independent GPS that allows real-time location sharing with family members."},
        {question:"What should I do if the watch detects an abnormality?",answer:"The device will trigger an instant alert, and if configured, it can automatically notify your emergency contacts."}
    ];

    const [formData, setFormData] = useState({
        email: "",
        question:""
    }

    );

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            const response = await fetch('https:/api-domain.com/api/faqs',{
                method:'POST',
                headers:{
                    'Contenet-type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if(response.ok){
                alert("Đã gửi đi thành công!");
            }else{
                alert("có lỗi xảy ra, vui lòng thử lại.");
            }
        } catch (error){
            console.error("Lỗi kết nối:", error);
        }
    };

    return (
        <>
            <div className="w-full flex flex-col items-center">
                <h1 className="faqTitle">CÂU HỎI & GIẢI ĐÁP</h1>
                <div className="w-[70%] flex-col mt-5">
                    {faqItem.map((item,index)=>(
                        <div className="FAQ" key={index}>
                            <div className="Q">
                                <span className="icon">+</span>
                                <h1 className="question">{item.question}</h1>
                            </div>
                            <div className="A">
                                <h1 className="answer">{item.answer}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="FAQForm">
                    <form onSubmit={handleSubmit} className="questionForm">

                        <h2 className="formTitle">
                            Đăng ký nhận tin
                        </h2>

                        <input
                            type="email"
                            title="Vui lòng điền email để nhận thông tin!"
                            placeholder="email của bạn..."
                            className="formInput"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value
                                })
                            }
                            required
                        />

                        <textarea
                            placeholder="Nếu bạn có thắc mắc điền vào đây..."
                            title="Thắc mắc của bạn là gì!"
                            className="formTextArea"
                            value={formData.question}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    question: e.target.value
                                })
                            }
                            required
                        />

                        <button title="Đăng ký!" type="submit" className="submitButton">
                            Đăng ký
                        </button>

                    </form>
                </div>
            </div>
        </>
    ); 
}