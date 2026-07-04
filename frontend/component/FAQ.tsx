'use client'
import "../style/FAQ.css"
import React, { useEffect,useState } from "react";
import { FormEvent } from "react";
// Giải đáp các thắc mắc về độ chính xác của cảm biến, thời lượng pin, và khả năng tương thích với điện thoại.

export default function FAQ() {
    interface FAQItem{
        id: number;
        questionText: string;
        answerText: string;
    }

    interface UserSubmit{
        email: string;
        question: string
    }

    const [formData, setFormData] = useState<UserSubmit>({
        email: "",
        question:""
    });
    const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
    useEffect(()=>{
        const fetchFAQs = async () =>{
            try{
                const response = await fetch("https://localhost:7278/api/FAQ/getAll");

                if(!response.ok){
                    throw new Error("Không lấy được dữ liệu!");
                }
                const data = await response.json();

                setFaqItems(data);
            } catch (error){
                console.error(error);
            }
        }
        fetchFAQs();
    },[]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            const response = await fetch("https://localhost:7278/api/Submit/create",{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
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
                    {faqItems.map((item)=>(
                        <div className="FAQ" key={item.id}>
                            <div className="Q">
                                <span className="icon">+</span>
                                <h1 className="question">{item.questionText}</h1>
                            </div>
                            <div className="A">
                                <h1 className="answer">{item.answerText}</h1>
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