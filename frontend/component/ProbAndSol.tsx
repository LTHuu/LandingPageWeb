'use client'
import "../style/ProbAndSol.css"
import Image from "next/image";

// Chỉ ra các vấn đề về sức khỏe (ví dụ: nhịp tim, giấc ngủ) và cách đồng hồ của bạn giải quyết chúng.

export default function ProbAndSol() {
    return (
        <>
            <div className="w-full flex flex-col items-center pb-10">
                <h1 className="ProbTitle">VẤN ĐỀ VÀ GIẢI PHÁP</h1>
                <div className="ChatBox w-[70%] flex-col mt-5 border">
                    <div className="ProbName flex flex-row">
                        {/* <Image src={probAvatar} alt="" width={20} height={20}/> */}
                        <h1 className="pl-5 pb-1 pt-1">Problem</h1>
                    </div>
                    <div className="ProbChat">
                        <h1>I can’t always know where my child is when they are outside alone.</h1>
                    </div>
                    <div className=" flex justify-end">
                        <div className="SolChat">
                            <h1>Real-time GPS tracking allows families to monitor location instantly</h1>
                        </div>
                    </div>
                    <div className="ProbChat">
                        <h1>Health abnormalities are often discovered too late.</h1>
                    </div>
                    <div className=" flex justify-end">
                        <div className="SolChat">
                            <h1>Continuous heart rate monitoring helps detect unusual activity early.</h1>
                        </div>
                    </div>
                    <div className="ProbChat">
                        <h1>Poor sleep quality affects health, but most people never notice it.</h1>
                    </div>
                    <div className=" flex justify-end">
                        <div className="SolChat">
                            <h1>Smart sleep analysis tracks sleep cycles and suggests improvements.</h1>
                        </div>
                    </div>
                    
                    <div className="ProbChat">
                        <h1>Fever or abnormal temperature changes are not always noticed immediately.</h1>
                    </div>
                    <div className=" flex justify-end">
                        <div className="SolChat">
                            <h1>Temperature sensors monitor body temperature continuously and send alerts.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}